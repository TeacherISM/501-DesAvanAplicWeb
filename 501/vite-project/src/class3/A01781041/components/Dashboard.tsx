// src/class3/A01781041/components/Dashboard.tsx
import React from 'react';
import Button from './Button';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h2>Welcome, {username}!</h2>
        <p>You've successfully logged in using the useReducer hook implementation.</p>
      </div>
      
      <div className="dashboard-content">
        <div className="info-cards">
          <div className="info-card">
            <h3>useReducer Benefits</h3>
            <ul>
              <li>Centralized state logic</li>
              <li>Easier debugging with predictable state changes</li>
              <li>Good for complex state interactions</li>
              <li>Scales better than useState for forms</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>Actions in this Login Form</h3>
            <ul>
              <li>SET_USERNAME</li>
              <li>SET_PASSWORD</li>
              <li>VALIDATE_FORM</li>
              <li>START_LOGIN</li>
              <li>LOGIN_SUCCESS/FAILURE</li>
              <li>LOGOUT</li>
            </ul>
          </div>
        </div>
        
        <div className="logout-container">
          <Button label="Logout" onClick={onLogout} type="secondary" />
        </div>
      </div>
      
      <style jsx>{`
        .dashboard {
          width: 100%;
        }
        
        .welcome-section {
          margin-bottom: 24px;
          text-align: center;
        }
        
        .welcome-section h2 {
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .welcome-section p {
          color: #7f8c8d;
          margin-top: 0;
        }
        
        .dashboard-content {
          margin-top: 20px;
        }
        
        .info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 30px;
        }
        
        @media (max-width: 600px) {
          .info-cards {
            grid-template-columns: 1fr;
          }
        }
        
        .info-card {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .info-card h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 18px;
        }
        
        .info-card ul {
          padding-left: 20px;
          margin: 0;
        }
        
        .info-card li {
          margin-bottom: 8px;
          color: #34495e;
        }
        
        .logout-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;