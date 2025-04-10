import React, { useState, useEffect } from 'react';
import InputField from "../../class2/A01028774/inputFile";
import Button from '../../class2/A01028774/button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (): void => {
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} name={''}      />
      <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} name={''}      />
      <Button
        label={loading ? 'Loading...' : 'Submit'}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;