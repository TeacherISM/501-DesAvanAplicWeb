import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

// Define types for state variables
const Login = () => {
  const [username, setUsername] = useState<string>(''); // Type annotation for username state
  const [password, setPassword] = useState<string>(''); // Type annotation for password state

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} // Type annotation for event
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} // Type annotation for event
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
