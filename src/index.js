import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
import ProductConfig from './ProductConfig';
import Color from './Color';
import Zoom from './Zoom';
import Canvas from "./Canvas";

ReactDOM.render(
  <ProductConfig>
    {(colorChoice, zoom, handleChange) => (
      <div className="product-container">
        <h1>A custom header; just for fun!</h1>
        <Color
          colorChoice={colorChoice}
          onChange={handleChange}
        />
        <Zoom zoom={zoom} onChange={handleChange} />
        <Canvas colorChoice={colorChoice} zoom={zoom} />
      </div>
    )}
  </ProductConfig>, 
  document.getElementById("root")
);
