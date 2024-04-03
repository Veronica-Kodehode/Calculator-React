import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "." && input.includes(".")) {
      return;
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input className="input" type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[
          1,
          2,
          3,
          "+",
          4,
          5,
          6,
          "-",
          7,
          8,
          9,
          "*",
          0,
          ".",
          "DEL",
          "/",
          "C",
          "=",
        ].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
