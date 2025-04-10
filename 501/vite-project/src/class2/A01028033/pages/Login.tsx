// Script with the activities and components for class 2
import React, { useState, ChangeEvent } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "/src/index.css";
import "/src/App.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button label="A01028033's Submit" onClick={handleSubmit} />
      <h5></h5>
      <Button
        label="Return to menu"
        onClick={() =>
          (window.location.href = "/public/A01028033/menu/milestoneMenu.html")
        }
      />
    </div>
  );
};

export default Login;
