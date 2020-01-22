import Big from "big.js";

const operate = (a, b, operation) => 
  const one = Big(a || "0");
  //If dividing or multiplying, then 1 maintains current value in cases of null
  const two = Big(b || (operation === "/" || operation === "*" ? "1" : "0"));
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "*") {
    return one.times(two).toString();
  }
  if (operation === "/") {
    if (b === "0") {
      alert("Divide by 0 error");
      return "Error";
    } else {
      return one.div(two).toString();
    }
  }
};

export default operate;
