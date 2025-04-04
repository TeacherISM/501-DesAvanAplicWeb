import React from 'react';
import './login.css';

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;