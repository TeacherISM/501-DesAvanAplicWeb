import { useState } from "react";
import InputField from "../../class3/A01028889/inputField";
import Button from "../../class3/A01028889/button";
import "./Styles/login.css"; // Importa el archivo CSS

import WelcomeMessage from "./welcomeMessage";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <WelcomeMessage name={name} />
      ) : (
        <div className="login-container">
          <h1>Login</h1>
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Login" onClick={() => setIsLoggedIn(true)} />
        </div>
      )}
    </>
  );
}

export default Login;