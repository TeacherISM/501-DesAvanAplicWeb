import React, { useState } from "react";

// Sin template literal
// const [nombre] = useState("Mundo");
//   const [color, setColor] = useState("blue");

//   const colores = ["blue", "green", "red", "purple", "orange"];

//   const cambiarSaludo = function () {
//     const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
//     setColor(colorAleatorio);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1
//         style={{
//           fontSize: "2rem",
//           color: color, // sin template literal, solo variable directa
//         }}
//       >
//         {"¡Hola, " + nombre + "!"} {/* sin template literal */}
//       </h1>
//       <button
//         onClick={cambiarSaludo}
//         className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
//       >
//         Cambiar saludo
//       </button>
//     </div>
//   );
// };

// Con template literal
function templateliterals() {
    const [nombre] = useState("Profesor");
    const [color, setColor] = useState("blue");
  
    const colores = ["blue", "green", "red", "purple", "orange"];
  
    const cambiarSaludo = () => {
    
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      setColor(colorAleatorio);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1
          style={{
            fontSize: "2rem",
            color: `${color}`, // uso de template literal
          }}
        >
          {`¡Hola, ${nombre}!`} {/* uso de template literal */}
        </h1>
        <button
          onClick={cambiarSaludo}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Cambiar color
        </button>
      </div>
    );
  };
  

export default templateliterals;