import React from 'react';
import Zoom from './Zoom';
import Color from './Color';

class ProductConfig extends React.Component {
  static Zoom = Zoom;

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

  render() {
    return (
      <div>
        {this.props.children(
          this.state.zoom,
          this.handleZoom
        )}
      </div>
    )
  }
}

export default ProductConfig;