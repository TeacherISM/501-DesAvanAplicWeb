import React, { useState } from "react";

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setError("");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Oculta el popup después de 2 segundos
  };
  

  return (
    <div style={{ maxWidth: "300px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", marginTop: "10px" }}>Iniciar sesión</button>
        {showPopup && (
        <div style={{ position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)", background: "green", color: "white", padding: "10px", borderRadius: "5px" }}>
          Login exitoso
        </div>
      )}
      </form>
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

export default Login;
