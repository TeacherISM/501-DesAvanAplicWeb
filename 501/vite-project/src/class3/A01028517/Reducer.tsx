import React, { useState, useReducer } from "react";

// Reducer para el contador
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default function App() {
  const [text, setText] = useState(""); // useState para el texto
  const [count, dispatch] = useReducer(counterReducer, 0); // useReducer para el contador

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        useState + useReducer Example
      </h1>

      <div style={{
        marginBottom: "2rem",
        width: "100%",
        maxWidth: "400px"
      }}>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "#374151" }}>
          Escribe algo:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />
        <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
          Texto actual: <strong>{text}</strong>
        </p>
      </div>

      <div style={{
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
          Contador: {count}
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <button
            onClick={() => dispatch({ type: "increment" })}
            style={{
              backgroundColor: "#10b981",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer"
            }}
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            style={{
              backgroundColor: "#ef4444",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer"
            }}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            style={{
              backgroundColor: "#9ca3af",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Reset
          </button>
        </div>
        
      </div>
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
}
