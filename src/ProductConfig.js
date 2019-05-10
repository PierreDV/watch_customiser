import React, { createContext } from 'react';

export const WatchContext = createContext();

function ProductConfig({children, colorChoice, colorOptions, zoom}) {

  const [state, setState] = React.useState({
    colorChoice: colorChoice || colorOptions[0],
    zoom
  });

  const handleZoom = zoom => {
    setState(prevState => ({ ...prevState, zoom }))
  }

  const handleColorChange = colorChoice => {
    setState(prevState => ({ ...prevState, colorChoice }))
  }

  return (
    <WatchContext.Provider
      value={{
        colorOptions,
        ...state,
        handleColorChange,
        handleZoom
      }}
    >
      {children({ ...state })}
    </WatchContext.Provider>
  )
 
}

export default ProductConfig;