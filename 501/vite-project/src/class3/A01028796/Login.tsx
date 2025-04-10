/** @jsxImportSource react */
import { useState, useEffect } from "react";
import InputField from "./components/InputField.tsx";
import Button from "./components/Button.tsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Por favor ingresa tus credenciales.");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Iniciaste sesión como ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Iniciar sesión" type="submit" />
      <p style={{ marginTop: "1rem", textAlign: "center" }}>{message}</p>
      <p></p>
      <button
        onClick={() => (window.location.href = '../../../public/A01028796/menu.html')}
        style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#e5e7eb",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            cursor: "pointer",
            }}
            >
            Volver al menú
        </button>
    </form>
  );
}
