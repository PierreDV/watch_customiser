import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Canvas from "./Canvas";

function Color() {
  return null; // You'll create this in a later exercise
}

function Zoom() {
  return null; // You'll create this in a later exercise
}

class ProductConfig extends React.Component {
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

ReactDOM.render(<ProductConfig />, document.getElementById("root"));
