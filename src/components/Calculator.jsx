import React, { useState } from "react";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import Button from "./Button";
import styles from "/src/styles/Calculator.module.css";

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
    <div className={styles.calculator}>
      <InputField value={input} />
      <ResultDisplay result={result} />
      <div className={styles.buttons}>
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
          <Button key={item} value={item} onClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
