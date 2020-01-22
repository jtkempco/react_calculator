import React from "react";
import "./Button.scss";

const Button = props => {
  const handleClick = () => {
    props.clickHandler(props.value);
  };

  const className = [
    "calculator-button",
    props.wide ? "wide" : "",
    props.orange ? "orange" : "",
    props.gray ? "gray" : "",
    props.disabled && props.disabled === props.value ? "disabled" : ""
  ];

  return (
    <button
      className={className.join(" ").trim()}
      disabled={props.disabled && props.disabled === props.value ? true : false}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
