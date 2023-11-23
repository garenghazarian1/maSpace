import React, { useState } from 'react';

function ColorBox() {
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [boxColors, setBoxColors] = useState(Array(10).fill(getRandomColor()));

  const handleBoxHover = (index) => {
    const newBoxColors = [...boxColors];
    newBoxColors[index] = getRandomColor();
    setBoxColors(newBoxColors);
  };

  return (
    <div className="  h-24 flex overflow-hidden ">
     
      <div className="flex flex-wrap ">
        {boxColors.map((color, index) => (
          <div
            key={index}
            className="w-24 h-24  rounded cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
            style={{ backgroundColor: color }}
            onMouseEnter={() => handleBoxHover(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorBox;
