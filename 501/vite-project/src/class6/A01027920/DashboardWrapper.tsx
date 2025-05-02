import React from 'react';
import { UserProvider } from './UserContext';
import Dashboard from './Dashboard';

function DashboardWrapper() {
    return (
      <UserProvider>
          <Dashboard />
      </UserProvider>
    );
  }
  
  export default DashboardWrapper;