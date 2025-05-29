import React, { useState } from "react";

function ProgressBar() {
  const [barValue, setbarValue] = useState({ Value: 0, Color: "red" });
  console.log("barValue", barValue);
  const handleClick = (change) => {
    if (change.toLowerCase() === "inc") {
      let barVal = ValidateandColor(barValue.Value + 10);
      setbarValue(barVal);
    } else {
      let barVal = ValidateandColor(barValue.Value - 10);
      setbarValue(barVal);
    }
  };

  const ValidateandColor = (Value) => {
    console.log(Value);
    const NewValue = Value < 0 ? 0 : Value > 100 ? 100 : Value;
    if (NewValue < 40) {
      return { Value: NewValue, Color: "red" };
    } else if (NewValue >= 40 && NewValue < 79) {
      return { Value: NewValue, Color: "orange" };
    } else {
      return { Value: NewValue, Color: "green" };
    }
  };

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "grey",
          width: "80vw",
          height: "2rem",
          display: "flex",
          justifyContent: "start",
          borderRadius: "0.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          id="testBgColor"
          style={{
            backgroundColor: barValue.Color,
            width: `${barValue.Value}%`,
            height: "2rem",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            borderRadius: " 0.5rem 0rem 0rem 0.5rem",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            pointerEvents: "none",
          }}
        >
          {barValue.Value}%
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
        }}
      >
        <button onClick={() => handleClick("dec")}>-10%</button>
        <button onClick={() => handleClick("inc")}>+10%</button>
      </div>
    </>
  );
}

export default ProgressBar;
