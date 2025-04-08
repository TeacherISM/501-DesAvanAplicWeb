// src/class1/api/UserList.tsx
import React, { useState } from 'react';
import { fetchUsers, processUserData } from './userApi';

// Define the type for processed user data
interface ProcessedUser {
  id: number;
  name: string;
  username: string;
  email: string;
  location: string;
  displayName: string;
}

export const UserList: React.FC = () => {
  // State to store users and loading status
  const [processedUsers, setProcessedUsers] = useState<ProcessedUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Function to load users
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUsers();
      setProcessedUsers(processUserData(data));
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-list-container">
      <h3>User List Example</h3>
      <p>This component demonstrates fetching and displaying user data using ES6+ features.</p>
      
      {/* Button to trigger data loading */}
      <button onClick={loadUsers} disabled={loading} className="load-button">
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      
      {error && <div className="error-message">{error}</div>}
      
      {/* Conditionally render users or message */}
      {processedUsers.length > 0 ? (
        <div className="users-grid">
          {processedUsers.map(user => (
            <div key={user.id} className="user-card">
              <h4>{user.displayName}</h4>
              <div className="user-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Location:</strong> {user.location}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data-message">Click "Fetch Users" to load data</p>
      )}
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .user-list-container {
          padding: 20px;
        }
        
        h3 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 10px;
        }
        
        .load-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin: 20px 0;
          cursor: pointer;
          font-size: 16px;
        }
        
        .load-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        
        .no-data-message {
          color: #7f8c8d;
          font-style: italic;
        }
        
        .users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        
        .user-card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .user-card h4 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        
        .user-details p {
          margin: 8px 0;
          color: #555;
        }
      `}</style>
    </div>
  );
};