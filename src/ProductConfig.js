import React, { Component } from 'react';
import Canvas from "./Canvas";
import Color from './Color';
import Zoom from './Zoom';

class ProductConfig extends Component {
  state = {
    colorChoice: null,
    zoom: null
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = JSON.parse(e.target.value);
    this.setState(change);
  };

  render() {
    return (
      <div className="product-container">
        <Canvas colorChoice={this.state.colorChoice} zoom={this.state.zoom} />
        <Color
          colorChoice={this.state.colorChoice}
          onChange={this.handleChange}
        />
        <Zoom zoom={this.state.zoom} onChange={this.handleChange} />
      </div>
    );
  }
}

export default ProductConfig;