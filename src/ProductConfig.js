import React from 'react';
import Zoom from './Zoom';
import Color from './Color';

class ProductConfig extends React.Component {
  static Zoom = Zoom;
  static Color = Color;

  state = {
    colorChoice: null,
    zoom: this.props.zoom
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = JSON.parse(e.target.value);
    this.setState(change);
  };

  handleZoom = value => {
    this.setState({ zoom: value });
  };

  handleColorChange = value => {
    this.setState({ colorChoice: value });
  }

  render() {
    return (
      <div>
        {this.props.children(
          this.props.colorOptions,
          this.state,
          this.handleZoom,
          this.handleColorChange
        )}
      </div>
    )
  }
}

export default ProductConfig;