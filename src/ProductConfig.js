import React, { createContext, useState } from 'react';

export const WatchContext = createContext();

function ProductConfig(props) {

  const [colorChoice, setColorChoice] = useState(props.colorChoice || props.colorOptions[0]);
  const [zoom, setZoom] = useState(props.zoom);
  const handleZoom = value => setZoom(value);
  const handleColorChange = value => setColorChoice(value);

  return (
    <WatchContext.Provider
      value={{
        colorOptions: props.colorOptions,
        colorChoice,
        zoom,
        handleColorChange,
        handleZoom
      }}
    >
      {props.children({ colorChoice, zoom })}
    </WatchContext.Provider>
  )
}

export default ProductConfig;