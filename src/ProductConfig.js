import React from 'react';

export const WatchContext = React.createContext();

class ProductConfig extends React.Component {

  state = {
    colorChoice: this.props.colorChoice || this.props.colorOptions[0],
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
      <WatchContext.Provider
        value={{
          colorOptions: this.props.colorOptions,
          ...this.state,
          handleColorChange: this.handleColorChange,
          handleZoom: this.handleZoom
        }}
      >
        {this.props.children({ ...this.state })}
      </WatchContext.Provider>
    )
  }
}

export default ProductConfig;