import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
    {label}
  </button>
);

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="p-2 border rounded mb-2 w-full"
  />
);

const ActividadClase2: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (): void => {

    setLoginSuccess(true);
  };

  const handleBackToMenu = (): void => {
    navigate('/');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
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
      {loginSuccess && <p className="mt-4 text-green-500">Inicio de sesión exitoso</p>}
      <Button label="Regresar al Menú" onClick={handleBackToMenu} />
    </div>
  );
};

export default ActividadClase2;
