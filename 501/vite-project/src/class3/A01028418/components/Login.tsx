import React, { useState, useEffect } from "react";
import InputField from "../../../class2/A01028418/components/InputField";
import Button from "../../../class2/A01028418/components/Button";
import "../class3.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>(""); // Tipado explícito como string
  const [password, setPassword] = useState<string>(""); // Tipado explícito como string
  const [error, setError] = useState<string>(""); // Tipado explícito como string
  const [loading, setLoading] = useState<boolean>(false); // Tipado explícito como boolean

  const handleSubmit = (): void => {
    setLoading(true);
    // Simulamos una solicitud de inicio de sesión
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        console.log("Login successful");
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button label={loading ? "Loading..." : "Submit"} onClick={handleSubmit} />
    </div>
  );
};

export default Login;

