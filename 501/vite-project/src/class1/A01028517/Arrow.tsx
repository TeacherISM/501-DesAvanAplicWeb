import React, { useState } from "react";

// Componente con destructuring en props
const Greeting = ({ name }) => {
  return (
    <h2 style={{ marginTop: "20px", color: "#007acc" }}>
      ¡Hola, {name}!
    </h2>
  );
};

const Arrow_and_Deconstructing = () => {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name.trim() !== "") {
      setShowGreeting(true);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333" }}>¡Bienvenido!</h1>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #aaa",
          width: "80%",
        }}
      />

      <br />

      <button
        onClick={handleClick}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007acc",
          color: "white",
          cursor: "pointer",
        }}
      >
        Presiona para recibir un saludo
      </button>

      {showGreeting && <Greeting name={name} />}

      <a href="/public/A01028517/Menú.html">
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#ff5722",
          color: "white",
          cursor: "pointer",
        }}
      >
        Regresar al menú
      </button>
      </a>
    </div>
    
  );
};

export default Arrow_and_Deconstructing;
