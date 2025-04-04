import React, { useState } from 'react';
import Button from './button';
import Input from './input';

const LoginPage: React.FC = () => {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div style={{ marginBottom: '2rem' }}>
          <Input
            type="username"
            placeholder="User"
            value={email}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button text="Entrar" onClick={handleSubmit} />
        </div>
        <div>
        <Button text="Regresarse" onClick={ () => window.location.reload()} />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
