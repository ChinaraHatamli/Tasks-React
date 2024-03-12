import React, { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState("#ffffff");
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  };
  return (
    <div>
    <h3>Random Color Generator</h3>
    <button style={{ backgroundColor: color }} onClick={generateRandomColor}>
      Generator
    </button>
  </div>

  )
}

export default RandomColor;
