import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Login from './Login';

const Dashboard: React.FC = () => {
  const context = useContext(UserContext);

  const { user } = context;

  return (
    <div className="p-4">
      <Login></Login>
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
      <br />
      <a href='/A01027920/Home.html' className='buttonlink'>Regresar a menu</a>
    </div>
  );
};

export default Dashboard;
