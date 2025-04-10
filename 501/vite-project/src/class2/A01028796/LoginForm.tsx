import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login submitted (demo)\nEmail: ${email}\nPassword: ${password}`);
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
      <Button label="Sign In" type="submit" />

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
