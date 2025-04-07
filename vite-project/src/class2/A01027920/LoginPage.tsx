import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    if (username == 'user' && password == 'password') {
      window.location.href = "../../public/A01027920/SuccessfilLogin.html";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default LoginPage;
