// src/class2/A01781041/TravelDashboard.tsx
import React, { useState } from 'react';
import TravelCard from './components/TravelCard';

// Create a LoginForm component here to avoid cross-directory imports
const LoginForm: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };
  
  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h3>Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
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
          padding: 20px;
        }
        
        .login-form-wrapper {
          width: 100%;
          max-width: 400px;
          padding: 30px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #2c3e50;
          text-align: center;
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
          margin-bottom: 5px;
          font-weight: 500;
          color: #555;
        }
        
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        input:focus {
          border-color: #3498db;
          outline: none;
        }
        
        .login-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .login-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

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
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>
      
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
    </div>
  );
};

export default TravelDashboard;