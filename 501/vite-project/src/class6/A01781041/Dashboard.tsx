import React from 'react';
import { useUser, UserRole } from './UserContext';

// Permission-based component that only renders if user has required permission
const PermissionGuard: React.FC<{
  permission: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ permission, children, fallback = null }) => {
  const { hasPermission } = useUser();
  
  if (hasPermission(permission)) {
    return <>{children}</>;
  }
  
  return <>{fallback}</>;
};

const Dashboard: React.FC = () => {
  const { state, logout } = useUser();
  const { username, role } = state;

  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>

      <div className="dashboard-container">
        <header className="dashboard-header">
          <div className="user-info">
            <h1>Welcome, {username}</h1>
            <div className="role-badge" data-role={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </div>
          </div>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-tabs">
            <div className="tab active">Dashboard</div>
            <PermissionGuard permission="edit">
              <div className="tab">Projects</div>
            </PermissionGuard>
            <PermissionGuard permission="approve">
              <div className="tab">Approvals</div>
            </PermissionGuard>
            <PermissionGuard permission="manage_users">
              <div className="tab">User Management</div>
            </PermissionGuard>
          </div>

          <div className="dashboard-widgets">
            {/* All users can view statistics */}
            <div className="widget">
              <h3>Statistics</h3>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-value">24</div>
                  <div className="stat-label">Active Projects</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">8</div>
                  <div className="stat-label">Pending Tasks</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">16</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Completion Rate</div>
                </div>
              </div>
            </div>

            {/* Managers and admins can view pending approvals */}
            <PermissionGuard 
              permission="approve"
              fallback={
                <div className="permission-restricted">
                  <p>You need Manager or Admin permissions to view approvals</p>
                </div>
              }
            >
              <div className="widget">
                <h3>Pending Approvals</h3>
                <ul className="approval-list">
                  <li>
                    <span>Travel Request - New York Conference</span>
                    <div className="action-buttons">
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                    </div>
                  </li>
                  <li>
                    <span>Expense Report - Q3 Client Meeting</span>
                    <div className="action-buttons">
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                    </div>
                  </li>
                  <li>
                    <span>Time Off Request - Alex Johnson</span>
                    <div className="action-buttons">
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                    </div>
                  </li>
                </ul>
              </div>
            </PermissionGuard>

            {/* Only admins can manage users */}
            <PermissionGuard 
              permission="manage_users"
              fallback={
                <div className="permission-restricted">
                  <p>You need Admin permissions to manage users</p>
                </div>
              }
            >
              <div className="widget">
                <h3>User Management</h3>
                <div className="user-management">
                  <table className="user-table">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>john.doe</td>
                        <td>Manager</td>
                        <td>Active</td>
                        <td>
                          <button className="small-btn edit-btn">Edit</button>
                          <button className="small-btn delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>jane.smith</td>
                        <td>Employee</td>
                        <td>Active</td>
                        <td>
                          <button className="small-btn edit-btn">Edit</button>
                          <button className="small-btn delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>mike.taylor</td>
                        <td>Guest</td>
                        <td>Inactive</td>
                        <td>
                          <button className="small-btn edit-btn">Edit</button>
                          <button className="small-btn delete-btn">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="add-user-btn">Add New User</button>
                </div>
              </div>
            </PermissionGuard>

            {/* Employee and above can create new requests */}
            <PermissionGuard 
              permission="create"
              fallback={
                <div className="permission-restricted">
                  <p>Guests cannot create new requests</p>
                </div>
              }
            >
              <div className="widget">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="action-btn">New Travel Request</button>
                  <button className="action-btn">Submit Expense</button>
                  <button className="action-btn">Request Time Off</button>
                </div>
              </div>
            </PermissionGuard>
          </div>
        </div>

        <div className="rbac-explanation">
          <h2>How Role-Based Access Control (RBAC) Works</h2>
          <p>
            This dashboard demonstrates React Context API for role-based access control.
            Components conditionally render based on the user's permissions.
          </p>
          
          <div className="implementation-highlights">
            <div className="highlight-card">
              <h3>React Context API</h3>
              <p>Provides global state without prop drilling</p>
              <code>const UserContext = createContext();</code>
            </div>
            
            <div className="highlight-card">
              <h3>Permission Guards</h3>
              <p>Components that conditionally render based on permissions</p>
              <code>{`<PermissionGuard permission="edit">`}</code>
            </div>
            
            <div className="highlight-card">
              <h3>User Reducer</h3>
              <p>State management for authentication and authorization</p>
              <code>const [state, dispatch] = useReducer(userReducer, initialState);</code>
            </div>
          </div>
        </div>
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
        
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 40px;
          color: #333;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .user-info h1 {
          margin: 0;
          font-size: 24px;
          color: #2c3e50;
        }

        .role-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .role-badge[data-role="admin"] {
          background-color: #e74c3c;
          color: white;
        }

        .role-badge[data-role="manager"] {
          background-color: #3498db;
          color: white;
        }

        .role-badge[data-role="employee"] {
          background-color: #2ecc71;
          color: white;
        }

        .role-badge[data-role="guest"] {
          background-color: #95a5a6;
          color: white;
        }

        .logout-button {
          background-color: #ecf0f1;
          color: #34495e;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .logout-button:hover {
          background-color: #dfe6e9;
        }

        .dashboard-content {
          margin-bottom: 40px;
        }

        .dashboard-tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 25px;
        }

        .tab {
          padding: 12px 24px;
          color: #7f8c8d;
          cursor: pointer;
          transition: all 0.2s;
          border-bottom: 3px solid transparent;
        }

        .tab:hover {
          color: #34495e;
        }

        .tab.active {
          color: #3498db;
          border-bottom-color: #3498db;
          font-weight: 500;
        }

        .dashboard-widgets {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 20px;
        }

        @media (max-width: 1100px) {
          .dashboard-widgets {
            grid-template-columns: 1fr;
          }
        }

        .widget {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
          margin-bottom: 20px;
        }

        .widget h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #2c3e50;
          border-bottom: 1px solid #f1f1f1;
          padding-bottom: 10px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .stat-box {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #3498db;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #7f8c8d;
          font-size: 14px;
        }

        .approval-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .approval-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f1f1f1;
        }

        .approval-list li:last-child {
          border-bottom: none;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .approve-btn, .reject-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        }

        .approve-btn {
          background-color: #2ecc71;
          color: white;
        }

        .reject-btn {
          background-color: #e74c3c;
          color: white;
        }

        .user-management {
          display: flex;
          flex-direction: column;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
        }

        .user-table th, .user-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #f1f1f1;
        }

        .user-table th {
          font-weight: 500;
          color: #34495e;
        }

        .small-btn {
          padding: 4px 8px;
          border: none;
          border-radius: 3px;
          font-size: 12px;
          cursor: pointer;
          margin-right: 5px;
        }

        .edit-btn {
          background-color: #3498db;
          color: white;
        }

        .delete-btn {
          background-color: #e74c3c;
          color: white;
        }

        .add-user-btn {
          align-self: flex-start;
          padding: 8px 16px;
          background-color: #2ecc71;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }

        .action-btn {
          padding: 12px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .action-btn:hover {
          background-color: #2980b9;
        }

        .permission-restricted {
          background-color: #f8f9fa;
          border: 1px dashed #bdc3c7;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          color: #7f8c8d;
        }

        .rbac-explanation {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          margin-top: 40px;
        }

        .rbac-explanation h2 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          text-align: center;
        }

        .rbac-explanation p {
          text-align: center;
          color: #34495e;
          max-width: 800px;
          margin: 0 auto 30px;
        }

        .implementation-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .highlight-card {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .highlight-card h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .highlight-card p {
          color: #34495e;
          margin-bottom: 15px;
          text-align: left;
        }

        .highlight-card code {
          display: block;
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 14px;
          color: #e74c3c;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;