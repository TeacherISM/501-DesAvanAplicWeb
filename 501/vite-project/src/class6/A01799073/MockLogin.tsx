import React from 'react';
import { useUser } from './UserContext';

const roles = ['employee', 'manager', 'admin', 'hr'] as const;

const MockLogin: React.FC = () => {
  const { login } = useUser();

  return (
    <div style={{ marginBottom: 18 }}>
      <h2 className="neon-title">Selecciona el Rol</h2>
      {roles.map((role) => (
        <button
          key={role}
          className="btn-neon"
          style={{ marginRight: 9, marginBottom: 3 }}
          onClick={() => login(role)}
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MockLogin;
