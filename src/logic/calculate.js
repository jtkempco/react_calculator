import Big from "big.js";

import isNumber from "./isNumber";
import isOperator from "./isOperator";
import operate from "./operate";

const calculate = (obj, buttonValue) => {
  //clear all
  if (buttonValue === "AC") {
    return {
      display: null,
      total: null,
      operation: null,
      disabled: null
    };
  }

  //clear display
  if (buttonValue === "C") {
    return { display: null };
  }

  if (isNumber(buttonValue)) {
    if (obj.display && obj.operation && obj.total) {
      const display = obj.total === obj.display ? buttonValue : obj.display + buttonValue;
      return { display, disabled: null };
    }

    if (obj.display && obj.operation && obj.operation === "=") {
      return { display: buttonValue, operation: null, disabled: null };
    }

    const display = obj.display ? obj.display + buttonValue : buttonValue;
    return { display, disabled: null };
  }

  if (buttonValue === ".") {
    if (obj.display && obj.total && obj.display === obj.total) {
      return { display: "0." };
    }

    if (obj.display) {
      const display = obj.display.includes(".") ? obj.display : obj.display + buttonValue;
      return { display };
    }
    
    return { display: "0." };
  }

  if (buttonValue === "+/-") {
    return { display: (-1 * parseFloat(obj.display)).toString() };
  }

  if (buttonValue === "%") {
    const display = Big(obj.display)
      .div(Big("100"))
      .toString();
    return { display };
  }

  if (isOperator(buttonValue)) {
    if (obj.total && obj.display && obj.operation && !obj.disabled) {
      const v = operate(obj.total, obj.display, obj.operation);
      return {
        display: v,
        total: v,
        operation: buttonValue,
        disabled: buttonValue
      };
    }
    return {
      operation: buttonValue,
      total: obj.display,
      disabled: buttonValue
    };
  }

  if (buttonValue === "=" && obj.total) {
    return {
      display: operate(obj.total, obj.display, obj.operation),
      total: null,
      operation: buttonValue
    };
  }
};

export default calculate;
