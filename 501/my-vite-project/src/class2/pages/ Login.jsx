import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../index.css"; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="text-center">
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="card"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="card"
        />
      </div>
      <button onClick={handleSubmit} className="button">
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<Login />, document.getElementById("root"));