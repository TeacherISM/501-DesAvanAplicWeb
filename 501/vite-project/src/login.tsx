import React, { useState} from 'react';
import Button from './button';
import InputField from './inputfield';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    setSuccessMessage(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Submit" onClick={handleSubmit} />
      
      {/* Mensaje de éxito */}
      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>Log in exitoso</p>}
    </div>
  );
};

export default Login;
