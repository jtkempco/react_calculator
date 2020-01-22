import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import calculate from "../logic/calculate";
import "../calculator.css";

class Calculator extends Component {
  state = {
    display: null,
    total: null,
    operation: null,
    disabled: null
  };

  handleClick = buttonValue => {
    this.setState(calculate(this.state, buttonValue));
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.display || this.state.total || "0"} />
        <Buttons
          clickHandler={this.handleClick}
          disabled={this.state.disabled}
          currentDisplay={this.state.display}
        />
      </div>
    );
  }
}

export default Calculator;
