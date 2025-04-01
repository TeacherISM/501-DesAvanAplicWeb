import React, { useState, ChangeEvent } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
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
    </div>
  );
};

export default Login;
