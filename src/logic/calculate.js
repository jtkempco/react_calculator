import Big from "big.js";

import isNumber from "./isNumber";
import isOperator from "./isOperator";
import operate from "./operate";

/**
 * Given the button value and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   display:String    the value visible in the display
 *   total:String      the running total
 *   operation:String  +, -, *, /
 *   disabled:String   the value of the curent operation. It is disabled to prevent consecutive clicks
 */

const calculate = (obj, buttonValue) => {
  //reset the calculator data object.
  if (buttonValue === "AC") {
    return {
      display: null,
      total: null,
      operation: null,
      disabled: null
    };
  }

  //reset only the display
  if (buttonValue === "C") {
    return { display: null };
  }

  if (isNumber(buttonValue)) {
    if (buttonValue === "0" && obj.display === "0") {
      return { disabled: null };
    }   
    // If there is an operation, update display
    if (obj.operation) {
      if (obj.display) {
        return { display: obj.display + buttonValue, disabled: null };
      }
      return { display: buttonValue, disabled: null };
    }
    // If there is no operation, update display and clear total
    if (obj.display) {
      const display = obj.display === "0" ? buttonValue : obj.display + buttonValue;
      return {
        display,
        total: null,
        disabled: null
      };
    }
    return {
      display: buttonValue,
      total: null,
      disabled: null
    };    
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

  if (buttonValue === "=") {
    if (obj.display && obj.operation) {
      return {
        display: null,
        total: operate(obj.total, obj.display, obj.operation),
        operation: null,
        disabled: null
      };
    }else{
      return {};
    }
  }
};

export default calculate;
