import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login = ({ onBack }: { onBack: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async () => {
    if (!username || !password) {
      setMessage('Put something in the inputs!');
      setIsError(true);
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      setMessage('Login Successful!');
      setIsError(false);

      await delay(2000);

      window.location.href = '/public/A01783060/travel.html';
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
      <Button label="Back to Menu" onClick={onBack} />
      {message && (
        <p style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
