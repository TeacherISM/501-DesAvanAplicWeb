import React, { useState } from "react";

const ArrowFunction = () => {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(16);

  // Función flecha para cambiar el color
  const changeColor = () => setColor(color === "black" ? "blue" : "black");

  // Función flecha para aumentar el tamaño del texto
  const increaseSize = () => setSize(size + 2);

  return (
    <div>
      <p
        style={{
          color: color,
          fontSize: `${size}px`,
          transition: "all 0.3s ease",
        }}
      >
        ¡Puedes cambiar mi tamaño y color!
      </p>
      <button onClick={changeColor}>Cambiar color</button>
      <button onClick={increaseSize}>Aumentar tamaño</button>
    </div>
  );
};

export default ArrowFunction;

