import React from 'react';
import './login.css';

const Login: React.FC = () => {
  const handleReturn = () => {
    // Navigate to the landing.html file
    window.location.href = '/landing.html';
  };

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
        {/* Use window.location.href to navigate to landing.html */}
        <button type="button" className="return-button" onClick={handleReturn}>
          Return to Landing Page
        </button>
      </form>
    </div>
  );
};

export default Login;