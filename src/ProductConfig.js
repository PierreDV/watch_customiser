import { createContext, useState } from 'react';

let WatchContext;

function ProductConfig(props) {
  const [colorChoice, setColorChoice] = useState(props.colorChoice || props.colorOptions[0]);
  const [zoom, setZoom] = useState(props.zoom);

  WatchContext = createContext({
    colorOptions: props.colorOptions,
    colorChoice,
    zoom,
    handleColorChange: value => setColorChoice(value),
    handleZoom: value => setZoom(value)
  });

  return (props.children({ colorChoice, zoom }))
}

export { WatchContext };
export default ProductConfig;