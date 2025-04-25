// src/class1/A01781041/LoginDashboard.tsx
import React, { useState } from 'react';
import { LoginForm } from './ui/LoginForm';
import { Dashboard } from './ui/Dashboard';

const LoginDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  // Handle login
  const handleLogin = (user: string, password: string) => {
    // In a real app, we would validate credentials here
    if (user && password) {
      setUsername(user);
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  
  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>
      
      <div className="login-dashboard-container">
        <h2>Basic UI Example</h2>
        
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <Dashboard username={username} onLogout={handleLogout} />
        )}
        
        <div className="explanation">
          <h3>UI Component Breakdown</h3>
          <p>This example demonstrates a simple login/dashboard UI with the following React concepts:</p>
          <ul>
            <li><strong>Component Composition:</strong> The UI is built from multiple components - LoginForm and Dashboard</li>
            <li><strong>State Management:</strong> Using React's useState hook to track login status</li>
            <li><strong>Props:</strong> Passing data and callbacks between parent and child components</li>
            <li><strong>Conditional Rendering:</strong> Showing different components based on login state</li>
          </ul>
        </div>
        
        <style jsx>{`
          .nav-bar {
            padding: 15px;
            background-color: #f8f8f8;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
          }

          .back-link {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
          }

          .back-link:hover {
            text-decoration: underline;
          }

          .login-dashboard-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          
          h2 {
            color:rgb(58, 116, 174);
            margin-bottom: 30px;
          }
          
          .explanation {
            margin-top: 40px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #3498db;
            color: #333;
          }
          
          .explanation h3 {
            margin-top: 0;
            color: #2c3e50;
          }
          
          ul {
            list-style-type: disc;
            padding-left: 20px;
          }
          
          li {
            margin-bottom: 8px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoginDashboard;