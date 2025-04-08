// src/class1/ui/LoginForm.tsx
import React, { useState } from 'react';

// Define props interface
interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };
  
  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h3>Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .login-form-wrapper {
          width: 100%;
          max-width: 400px;
          padding: 30px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #2c3e50;
          text-align: center;
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #555;
        }
        
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        input:focus {
          border-color: #3498db;
          outline: none;
        }
        
        .login-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .login-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};