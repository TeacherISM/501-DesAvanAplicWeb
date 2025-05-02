// src/components/menuRole.tsx
import { FC, useContext } from 'react';
import { UserContext } from './userContext';

const Menu: FC = () => {
  const { login, user } = useContext(UserContext);

  return (
    <nav className="menu">
      <button
        onClick={() => login('employee')}
        className={user.role === 'employee' ? 'active' : ''}
      >
        Empleado
      </button>
      <button
        onClick={() => login('manager')}
        className={user.role === 'manager' ? 'active' : ''}
      >
        Manager
      </button>
      <button
        onClick={() => login('admin')}
        className={user.role === 'admin' ? 'active' : ''}
      >
        Admin
      </button>
    </nav>
  );
};

export default Menu;
