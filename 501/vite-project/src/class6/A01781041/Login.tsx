import React, { useState } from 'react';
import { useUser, UserRole } from './UserContext';

const Login: React.FC = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.EMPLOYEE);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    
    setError('');
    login(username, role);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Log in to Dashboard</h2>
        <p className="login-description">
          Enter your username and select a role to see role-based access control in action
        </p>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="form-input"
            >
              <option value={UserRole.ADMIN}>Admin</option>
              <option value={UserRole.MANAGER}>Manager</option>
              <option value={UserRole.EMPLOYEE}>Employee</option>
              <option value={UserRole.GUEST}>Guest</option>
            </select>
          </div>
          
          <div className="role-permissions">
            <h3>Role Permissions</h3>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Permissions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admin</td>
                  <td>All permissions including user management</td>
                </tr>
                <tr>
                  <td>Manager</td>
                  <td>View, edit, approve, create resources</td>
                </tr>
                <tr>
                  <td>Employee</td>
                  <td>View and create resources</td>
                </tr>
                <tr>
                  <td>Guest</td>
                  <td>View resources only</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .login-card {
          width: 100%;
          max-width: 500px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }

        h2 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 10px;
          text-align: center;
        }

        .login-description {
          text-align: center;
          color: #7f8c8d;
          margin-bottom: 25px;
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
          margin-bottom: 6px;
          font-weight: 500;
          color: #34495e;
        }

        .form-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        .form-input:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .login-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          margin-top: 10px;
        }

        .login-button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }

        .error-message {
          background-color: #fdeded;
          color: #e74c3c;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
          font-size: 14px;
        }

        .role-permissions {
          margin: 20px 0;
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 6px;
        }

        .role-permissions h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: #3498db;
          font-size: 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          font-weight: 600;
          color: #34495e;
        }

        tr:last-child td {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default Login;