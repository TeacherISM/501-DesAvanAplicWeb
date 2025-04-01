import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

interface LoginProps {
  onBack: () => void; // funcion para navegar devuelta a la página principal
}

const Login: React.FC<LoginProps> = ({ onBack }) => {
  const [username, setUsername] = useState<string>(''); // estado para nombre de usuario
  const [password, setPassword] = useState<string>(''); // estado para contraseña

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
      <Button label="Back to Home" onClick={onBack} /> {/* Back button */}
    </div>
  );
};

export default Login;