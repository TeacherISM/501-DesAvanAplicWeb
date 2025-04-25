// Script with the activities of class 6 - React Context API for User Roles
import { createContext, useState, useContext, ReactNode } from "react";
import "./styles.css";

// Define the user type
type UserType = {
  role: 'employee' | 'manager' | 'admin';
};

// Define the context type
type UserContextType = {
  user: UserType;
  login: (role: UserType['role']) => void;
};

// Create the context with a default value
export const UserContext = createContext<UserContextType>({
  user: { role: 'employee' },
  login: () => {},
});

// Props type for the provider
type UserProviderProps = {
  children: ReactNode;
};

// User Provider Component
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({ role: 'employee' }); // Default role: employee

  const login = (role: UserType['role']) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

// Dashboard Component
const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {user.role === 'employee' && (
        <div className="dashboard-section">
          <h3>Employee View</h3>
          <p>Submitted Travel Requests</p>
          <ul>
            <li>Trip to San Francisco - Pending</li>
            <li>Conference in New York - Approved</li>
            <li>Client Meeting in Chicago - Rejected</li>
          </ul>
        </div>
      )}
      {user.role === 'manager' && (
        <div className="dashboard-section">
          <h3>Manager View</h3>
          <p>Pending Travel Requests</p>
          <ul>
            <li>John Doe - Trip to Seattle</li>
            <li>Jane Smith - Conference in Boston</li>
            <li>Mike Johnson - Client Visit in Austin</li>
          </ul>
          <button>Approve Selected</button>
        </div>
      )}
      {user.role === 'admin' && (
        <div className="dashboard-section">
          <h3>Admin View</h3>
          <p>User Management</p>
          <ul>
            <li>Total Users: 42</li>
            <li>Active Employees: 28</li>
            <li>Active Managers: 10</li>
            <li>System Admins: 4</li>
          </ul>
          <button>Add New User</button>
        </div>
      )}
    </div>
  );
};

// Role Selector Component
const RoleSelector = () => {
  const { user, login } = useContext(UserContext);

  return (
    <div className="role-selector">
      <h3>Change User Role</h3>
      <div className="button-group">
        <button
          className={user.role === 'employee' ? 'button-active' : 'button-inactive'}
          onClick={() => login('employee')}
        >
          Employee
        </button>
        <button
          className={user.role === 'manager' ? 'button-active' : 'button-inactive'}
          onClick={() => login('manager')}
        >
          Manager
        </button>
        <button
          className={user.role === 'admin' ? 'button-active' : 'button-inactive'}
          onClick={() => login('admin')}
        >
          Admin
        </button>
      </div>
      <p className="current-role">Current role: <span className="role-value">{user.role}</span></p>
    </div>
  );
};

// Main Class6 Component
const Class6 = () => {
  return (
    <div className="class6-container">
      <h1>React Context API for User Roles</h1>
      <UserProvider>
        <RoleSelector />
        <Dashboard />
      </UserProvider>
    </div>
  );
};

export default Class6;
