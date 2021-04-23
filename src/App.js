import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  let [num, setNum] = useState(0);
  let [num1, setNum1] = useState(0);

  useEffect(() => {
    // alert("i am clicked");
    document.title = ` ${num1} times`;
  }, [num1]);

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </button>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        {num1}
      </button>
    </div>
  );
}
