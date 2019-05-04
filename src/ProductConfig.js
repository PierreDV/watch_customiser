import React, { Component } from 'react';

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
      <div>
        {this.props.children(
          this.state.colorChoice,
          this.state.zoom,
          this.handleChange
        )}
      </div>
    );
  }
}

export default ProductConfig;