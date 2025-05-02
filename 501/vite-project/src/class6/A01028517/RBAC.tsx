// Login.tsx
import { useState } from 'react';
import { login } from './auth';

const RBAC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = login(username, password);
    if (user) {
      const message = user.role === 'admin'
        ? 'Bienvenido administrador. Acceso completo.'
        : 'Bienvenido usuario. Acceso limitado.';
      alert(message);
      setError('');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 300, margin: 'auto' }}>
      <h2>Login</h2>
      <input
        placeholder="Usuario"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleLogin} style={{ width: '100%' }}>
        Iniciar sesión
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
  <a href="/">
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Página Inicial</button>
  </a>
  <a href="/public/A01028517/Milestone2/Milestone2_Menu.html">
    <button style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Menú Milestone 2</button>
  </a>
</div>
    </div>
  );
};


export default RBAC;