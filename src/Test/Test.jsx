import React, { useState } from "react";

function Test() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input className="input" type="text" value={input} readOnly />
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "/", "*", "-", ".", "=", "+", "C"].map(
          (item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          )
        )}
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Test;
