import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username == "xd" && password == "xd") {
      window.location.href = "./SuccessfulLogin.html";
    }
  };

  return (
    <>
          <h1>Login</h1>
          <InputField
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Submit" onClick={handleSubmit}/>
          <a href={'/A01027920/Home.html'} className='buttonlink'>Go to Home</a>
    </>
  );
}

export default Login;