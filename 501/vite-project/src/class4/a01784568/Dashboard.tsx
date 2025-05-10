import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Dashboard: React.FC = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <div className="p-4 text-red-500">User context is not available.</div>;
  }

  const { user } = context;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user.role === 'employee' && (
        <div>
          <h2 className="text-xl font-semibold">Employee View</h2>
          <p>Submitted Travel Requests</p>
        </div>
      )}
      {user.role === 'manager' && (
        <div>
          <h2 className="text-xl font-semibold">Manager View</h2>
          <p>Pending Travel Requests</p>
        </div>
      )}
      {user.role === 'admin' && (
        <div>
          <h2 className="text-xl font-semibold">Admin View</h2>
          <p>User Management</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
