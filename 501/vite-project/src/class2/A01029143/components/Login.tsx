import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    
    const welcomeMessage = `Welcome ${username} user!\nWith ${password} password!`;
    setMessage(welcomeMessage);
  };

  return (
    <div className="login-container">

    <h1 className="login-title">Login</h1>

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

    <Button label="Submit" onClick={handleSubmit} />

    {message && (
      <div className="login-message">
        <pre>{message}</pre>
      </div>
    )}

    <div>
        <a href='/src/class3/A01029143/pages/Menu.html'> Menu </a>
    </div>

    </div>
  );
};

export default Login;
