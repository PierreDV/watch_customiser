import React, { useContext } from 'react';
import Slider from "rc-slider";
import { WatchContext } from './ProductConfig';

function Zoom() {
  const context = useContext(WatchContext);

  return (
    <div className="zoom">
      <label>
        {context.zoom > 1.25
          ? "Zoom-out to get the bigger picture."
          : "Zoom-in for a more detailed view."}
      </label>
      <Slider
        value={context.zoom}
        min={1}
        max={1.5}
        step={0.1}
        onChange={context.handleZoom}
        trackStyle={{ backgroundColor: context.colorChoice.secondary }}
        railStyle={{ backgroundColor: context.colorChoice.tertiary }}
        handleStyle={{
          backgroundColor: context.colorChoice.primary,
          borderColor: context.colorChoice.tertiary
        }}
      />
    </div>
  );
}

export default Zoom;