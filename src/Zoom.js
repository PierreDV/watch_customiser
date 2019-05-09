import React from 'react';
import Slider from "rc-slider";
import { WatchContext } from './ProductConfig';

function Zoom() {
  return (
    <WatchContext.Consumer>
      {({ zoom, colorChoice, handleZoom }) => (
        <div className="zoom">
          <label>
            {zoom > 1.25
              ? "Zoom-out to get the bigger picture."
              : "Zoom-in for a more detailed view."}
          </label>
          <Slider
            value={zoom}
            min={1}
            max={1.5}
            step={0.1}
            onChange={handleZoom}
            trackStyle={{ backgroundColor: colorChoice.secondary }}
            railStyle={{ backgroundColor: colorChoice.tertiary }}
            handleStyle={{
              backgroundColor: colorChoice.primary,
              borderColor: colorChoice.tertiary
            }}
          />
        </div>
      )}
    </WatchContext.Consumer>
  );
}

export default Zoom;