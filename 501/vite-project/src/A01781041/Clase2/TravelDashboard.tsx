// src/A01781041/Clase2/TravelDashboard.tsx
import React, { useState } from 'react';
// Correct import path with the space in the folder name
import { LoginForm } from '../Clase1 /ui/LoginForm';
import TravelCard from './components/TravelCard';

// Sample travel requests data
const travelRequests = [
  {
    id: 1,
    title: 'Business Trip to New York',
    description: 'Annual tech conference and client meetings in Manhattan. Requires hotel stay for 3 nights.',
    date: '2025-06-15',
  },
  {
    id: 2,
    title: 'Team Retreat in Colorado',
    description: 'Team-building activities and strategy planning session in the mountains.',
    date: '2025-07-22',
  },
  {
    id: 3,
    title: 'Client Visit in San Francisco',
    description: 'Meeting with potential clients to discuss partnership opportunities.',
    date: '2025-05-10',
  },
  {
    id: 4,
    title: 'Training Workshop in Chicago',
    description: 'Three-day workshop on the latest industry technologies and best practices.',
    date: '2025-08-05',
  }
];

const TravelDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  // Handle login
  const handleLogin = (user: string, password: string) => {
    // In a real app, we would validate credentials here
    if (user && password) {
      setUsername(user);
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  
  // Handle card click
  const handleCardClick = (title: string) => {
    console.log(`Selected travel request: ${title}`);
    // In a real app, you might show details or update state here
  };
  
  return (
    <div className="travel-dashboard-container">
      {!isLoggedIn ? (
        <>
          <h2>Travel Request Portal</h2>
          <p className="login-prompt">Please log in to view your travel requests</p>
          <LoginForm onLogin={handleLogin} />
        </>
      ) : (
        <>
          <div className="dashboard-header">
            <h2>Travel Requests</h2>
            <div className="user-info">
              <span>Welcome, {username}</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          
          <div className="cards-container">
            {travelRequests.map(request => (
              <TravelCard 
                key={request.id}
                title={request.title}
                description={request.description}
                date={request.date}
                onClick={() => handleCardClick(request.title)}
              />
            ))}
          </div>
          
          <div className="explanation">
            <h3>Component Overview</h3>
            <p>This example demonstrates a reusable card component with the following React concepts:</p>
            <ul>
              <li><strong>Props:</strong> The TravelCard accepts title, description, date, and onClick props</li>
              <li><strong>CSS-in-JS:</strong> Styled using JSX styling for maintainable component-scoped styles</li>
              <li><strong>Component Composition:</strong> Building a UI from multiple reusable components</li>
              <li><strong>Conditional Rendering:</strong> Showing login or dashboard based on authentication state</li>
            </ul>
          </div>
        </>
      )}
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .travel-dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h2 {
          color: #3a74ae;
          margin-bottom: 20px;
        }
        
        .login-prompt {
          margin-bottom: 20px;
          color: #555;
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
        
        .logout-button {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }
        
        .logout-button:hover {
          background-color: #c0392b;
        }
        
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .explanation {
          margin-top: 40px;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #3498db;
          color:rgb(44, 58, 72);
        }
        
        .explanation h3 {
          margin-top: 0;
          color: #2c3e50;
        }
        
        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export default TravelDashboard;