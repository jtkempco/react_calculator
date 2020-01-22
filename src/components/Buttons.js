import React from "react";
import Button from "./Button";
import Row from "./Row";
import "./Buttons.scss";

const Buttons = props => {
  const handleClick = buttonValue => {
    props.clickHandler(buttonValue);
  };

  const clear = props.currentDisplay ? "C" : "AC";

  return (
    <div className="calculator-buttons">
      <Row>
        <Button clickHandler={handleClick} label={clear} value={clear} gray />
        <Button clickHandler={handleClick} label="+/-" value="+/-" gray />
        <Button clickHandler={handleClick} label="%" value="%" gray />
        <Button
          clickHandler={handleClick}
          label="÷"
          value="/"
          orange
          disabled={props.disabled}
        />
      </Row>
      <Row>
        <Button clickHandler={handleClick} label="7" value="7" />
        <Button clickHandler={handleClick} label="8" value="8" />
        <Button clickHandler={handleClick} label="9" value="9" />
        <Button
          clickHandler={handleClick}
          label="×"
          value="*"
          orange
          disabled={props.disabled}
        />
      </Row>
      <Row>
        <Button clickHandler={handleClick} label="4" value="4" />
        <Button clickHandler={handleClick} label="5" value="5" />
        <Button clickHandler={handleClick} label="6" value="6" />
        <Button
          clickHandler={handleClick}
          label="−"
          value="-"
          orange
          disabled={props.disabled}
        />
      </Row>
      <Row>
        <Button clickHandler={handleClick} label="1" value="1" />
        <Button clickHandler={handleClick} label="2" value="2" />
        <Button clickHandler={handleClick} label="3" value="3" />
        <Button
          clickHandler={handleClick}
          label="+"
          value="+"
          orange
          disabled={props.disabled}
        />
      </Row>
      <Row>
        <Button clickHandler={handleClick} label="0" value="0" wide />
        <Button clickHandler={handleClick} label="." value="." />
        <Button clickHandler={handleClick} label="=" value="=" orange />
      </Row>
    </div>
  );
};

export default Buttons;
