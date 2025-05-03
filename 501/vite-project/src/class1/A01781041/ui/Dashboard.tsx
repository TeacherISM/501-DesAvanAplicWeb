// src/class1/A01781041/ui/Dashboard.tsx
import React from 'react';

// Define props interface
interface DashboardProps {
  username: string;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
  // Mock data for dashboard
  const projects = [
    { id: 1, name: 'Project Alpha', status: 'In Progress', lastUpdated: '2 hours ago' },
    { id: 2, name: 'Project Beta', status: 'Completed', lastUpdated: 'Yesterday' },
    { id: 3, name: 'Project Gamma', status: 'Not Started', lastUpdated: '3 days ago' }
  ];
  
  // Format current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-info">
          <h3>Welcome, {username}!</h3>
          <p className="date">{currentDate}</p>
        </div>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-summary">
          <div className="summary-card">
            <h4>3</h4>
            <p>Total Projects</p>
          </div>
          <div className="summary-card">
            <h4>1</h4>
            <p>In Progress</p>
          </div>
          <div className="summary-card">
            <h4>1</h4>
            <p>Completed</p>
          </div>
        </div>
        
        <div className="projects-section">
          <h3>Your Projects</h3>
          <div className="projects-list">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <span className={`status status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="last-updated">Last updated: {project.lastUpdated}</p>
                <button className="view-button">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .dashboard-container {
          background-color: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: white;
          border-bottom: 1px solid #eee;
        }
        
        .user-info h3 {
          margin: 0;
          color: #2c3e50;
        }
        
        .date {
          color: #7f8c8d;
          margin: 5px 0 0 0;
        }
        
        .logout-button {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .logout-button:hover {
          background-color: #c0392b;
        }
        
        .dashboard-content {
          padding: 20px;
        }
        
        .dashboard-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .summary-card {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .summary-card h4 {
          margin: 0;
          font-size: 24px;
          color: #3498db;
        }
        
        .summary-card p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .projects-section h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
        }
        
        .project-card {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .project-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .project-info h4 {
          margin: 0;
          color: #2c3e50;
        }
        
        .status {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-in-progress {
          background-color: #3498db;
          color: white;
        }
        
        .status-completed {
          background-color: #2ecc71;
          color: white;
        }
        
        .status-not-started {
          background-color: #95a5a6;
          color: white;
        }
        
        .last-updated {
          margin: 0 0 15px;
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .view-button {
          background-color: transparent;
          color: #3498db;
          border: 1px solid #3498db;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
        }
        
        .view-button:hover {
          background-color: #3498db;
          color: white;
        }
      `}</style>
    </div>
  );
};