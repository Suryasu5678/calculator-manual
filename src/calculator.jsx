import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [count, setCount] = useState("");

  const add = (value) => {
    setCount((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      let result = evaluateExpression(count);
      setCount(result);
    } catch {
      setCount("Error");
    }
  };

  const evaluateExpression = (expression) => {
    let operators = ["+", "-", "*", "/"];
    let numbers = [];
    let currentNumber = "";
    let operator = "";

    for (let char of expression) {
      if (operators.includes(char)) {
        numbers.push(Number(currentNumber));
        numbers.push(char);
        currentNumber = "";
      } else {
        currentNumber += char;
      }
    }
    numbers.push(Number(currentNumber));

    while (numbers.length > 1) {
      let [num1, operator, num2] = numbers.splice(0, 3);
      switch (operator) {
        case "+":
          numbers.unshift(num1 + num2);
          break;
        case "-":
          numbers.unshift(num1 - num2);
          break;
        case "*":
          numbers.unshift(num1 * num2);
          break;
        case "/":
          numbers.unshift(num1 / num2);
          break;
        default:
          throw new Error("Invalid operator");
      }
    }

    return numbers[0];
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1>CALCULATOR</h1>
      </div>
      <div className="calculator-grid">
        {[
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
          "0",
          "+",
          "-",
          "/",
          "*",
          "=",
          "clear",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "=") {
                calculateResult();
              } else if (btn === "clear") {
                setCount("");
              } else {
                add(btn);
              }
            }}
            className="calculator-button"
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="calculator-answer">
        <h1>ANSWER IS {count || 0}</h1>
      </div>
    </div>
  );
};

export default Calculator;
