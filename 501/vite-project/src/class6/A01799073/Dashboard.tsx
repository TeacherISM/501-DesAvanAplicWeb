import React from 'react';
import { useUser } from './UserContext';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="neon-card" style={{ maxWidth: 400 }}>
      <h1 className="title-neon">Dashboard</h1>
      {user.role === 'employee' && (
        <div>
          <h2 className="label-neon">Employee View</h2>
          <ul>
            <li>Submitted Travel Requests</li>
            <li>Submitted Expenses</li>
          </ul>
        </div>
      )}
      {user.role === 'manager' && (
        <div>
          <h2 className="label-neon">Manager View</h2>
          <ul>
            <li>Pending Travel Requests</li>
            <li>Pending Expenses</li>
            <li>Approve/Reject Requests</li>
          </ul>
        </div>
      )}
      {user.role === 'admin' && (
        <div>
          <h2 className="label-neon">Admin View</h2>
          <ul>
            <li>User Management</li>
            <li>System Settings</li>
          </ul>
        </div>
      )}
      {user.role === 'hr' && (
        <div>
          <h2 className="label-neon">HR View</h2>
          <ul>
            <li>View All Travel Requests</li>
            <li>Generate Expense Reports</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
