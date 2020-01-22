import React from "react";
import AutoScalingText from "./AutoScalingText";
import formatNumber from "../logic/formatNumber";
import "./Display.css";

const Display = props => {
  return (
    <div className="calculator-display">
      <AutoScalingText>{formatNumber(props.value)}</AutoScalingText>
    </div>
  );
};

export default Display;
