import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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
    </>
  );
}

export default Login;