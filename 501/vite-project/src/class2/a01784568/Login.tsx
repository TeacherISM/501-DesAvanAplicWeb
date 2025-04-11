import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

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

      {submitted && (
        <p className="mt-4 text-green-600 font-medium">
          ¡Sesión iniciada con éxito!
        </p>
      )}
    </div>
  );
};

export default Login;
