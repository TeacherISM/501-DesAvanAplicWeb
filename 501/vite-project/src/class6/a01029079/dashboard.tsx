// src/components/dashboard.tsx
import { FC, useContext } from 'react';
import { UserContext } from './userContext';
import './Styles/dashboard.css';

const Dashboard: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <div className="card">
      <div className="class-container">
            <h1 className="class-title">Class 6</h1>
            <p className="class-description">Role-Based Access Control (RBAC).</p>
            <a href="../../../../../src/class3/a01029079/public/menu2.html" className="class-button-link">
              Go to Menu
            </a>
          </div>
        <h1>Dashboard</h1>

        {user.role === 'employee' && (
          <>
            <h2>Employee View</h2>
            <p>Submitted Travel Requests</p>
          </>
        )}

        {user.role === 'manager' && (
          <>
            <h2>Manager View</h2>
            <p>Pending Travel Requests</p>
          </>
        )}

        {user.role === 'admin' && (
          <>
            <h2>Admin View</h2>
            <p>User Management</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
