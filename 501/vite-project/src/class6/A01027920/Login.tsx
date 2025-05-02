import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  const handleLogin = (role: string) => {
    login(role);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin('employee')}>Login as Employee</button>
      <button onClick={() => handleLogin('manager')}>Login as Manager</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
};

export default Login;