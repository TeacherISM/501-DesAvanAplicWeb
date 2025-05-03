import React from 'react';
import { UserProvider, useUser } from './UserContext';
import Login from './Login';
import Dashboard from './Dashboard';

// Component that conditionally renders Dashboard or Login based on auth state
const AuthStateHandler: React.FC = () => {
  const { state } = useUser();
  
  return (
    <>
      {state.isAuthenticated ? <Dashboard /> : <Login />}
    </>
  );
};

// Wrapper component that provides the UserContext
const DashboardWrapper: React.FC = () => {
  return (
    <UserProvider>
      <AuthStateHandler />
    </UserProvider>
  );
};

export default DashboardWrapper;