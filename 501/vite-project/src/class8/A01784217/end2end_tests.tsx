/**
 * Author: Nicole Dávila Hernández 
 * 
 * Description: This code implements a simple Role-Based Access Control (RBAC) login system using React.
 * Contains improvements to the original code to make it more stable, including:
 * - Added proper name attributes to inputs
 * - Changed the button to a type="submit" button
 * - Wrapped inputs in a form element
 * - Added a proper error message class
 */

import { useState } from 'react';
import { login } from './auth';

const RBAC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          name="password"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Iniciar sesión
        </button>
        {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
      </form>
      <div>
        <h3>Credenciales de prueba</h3>
        <p><strong>Usuario con acceso completo:</strong> admin / admin123</p>
        <p><strong>Usuario con acceso limitado:</strong> user / user123</p>
        <p><strong>Nota:</strong> Si los tests en Cypress fallan la primera vez que se corren por cuestiones de timeout, volver a cargar los tests manualmente.</p>
      </div>

      <div>
        <a href="/">
          <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Página Inicial</button>
        </a>
        <a href="/public/A01028517/Milestone2/Milestone3_Menu.html">
          <button style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Menú Milestone 3</button>
        </a>
      </div>
    </div>
  );
};

export default RBAC;