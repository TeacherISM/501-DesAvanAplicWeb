import { useState } from "react";
import InputField from "./inputField";
import Button from "./button";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
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
      <Button label="Login" onClick={() => console.log("Login clicked")} />
    </div>
  );
}

export default Login;