// src/A01781041/Clase3/index.tsx
import React, { useState, useEffect } from 'react';
import LoginWithReducer from './LoginWithReducer';
import { AuthProvider } from './contexts/AuthContext';

const Clase3Router: React.FC = () => {
  // Get hash from URL (remove the # symbol)
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.replace('#', '') || 'menu'
  );

  // Handle navigation
  useEffect(() => {
    // Update path when hash changes
    const handleHashChange = () => {
      const newPath = window.location.hash.replace('#', '') || 'menu';
      setCurrentPath(newPath);
      
      // Store current path in sessionStorage
      sessionStorage.setItem('clase3Path', newPath);
    };

    // Load stored path from session
    const storedPath = sessionStorage.getItem('clase3Path');
    if (storedPath) {
      setCurrentPath(storedPath);
      window.location.hash = storedPath;
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigate to a path
  const navigateTo = (path: string) => {
    window.location.hash = path;
  };

  // Render content based on current path
  const renderContent = () => {
    switch (currentPath) {
      case 'login-reducer':
        return (
          <AuthProvider>
            <LoginWithReducer />
          </AuthProvider>
        );
      default:
        // Menu view
        return (
          <div className="clase3-menu">
            <h2>Class 3 - Advanced React Hooks</h2>
            <div className="menu-buttons">
              <button onClick={() => navigateTo('login-reducer')}>
                Login with useReducer
              </button>
            </div>
            
            <div className="hooks-explanation">
              <h3>useReducer: A Powerful State Management Tool</h3>
              <p>
                The <code>useReducer</code> hook is an alternative to <code>useState</code> that is 
                especially useful for managing complex state logic in React components.
              </p>
              
              <h4>Key Benefits:</h4>
              <ul>
                <li><strong>Centralized State Logic:</strong> All state transitions in one place</li>
                <li><strong>Predictable State Changes:</strong> Actions clearly define how state updates</li>
                <li><strong>Complex State Handling:</strong> Ideal for states with multiple sub-values or complex transitions</li>
                <li><strong>Testing Advantages:</strong> Reducers are pure functions that are easy to test</li>
              </ul>
              
              <div className="code-example">
                <pre>{`
// Basic useReducer example
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
                `}</pre>
              </div>
            </div>
            
            {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
            <style jsx>{`
              .clase3-menu {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              }
              
              h2 {
                color: #3a74ae;
                margin-bottom: 30px;
                text-align: center;
              }
              
              .menu-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
                max-width: 300px;
                margin: 0 auto 40px auto;
              }
              
              button {
                background-color: #3498db;
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 6px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
              }
              
              button:hover {
                background-color: #2980b9;
              }
              
              .hooks-explanation {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 24px;
                margin-top: 30px;
                border-left: 4px solid #3498db;
              }
              
              .hooks-explanation h3 {
                color: #2c3e50;
                margin-top: 0;
                margin-bottom: 16px;
              }
              
              .hooks-explanation h4 {
                color: #34495e;
                margin-top: 20px;
                margin-bottom: 10px;
              }
              
              .hooks-explanation p {
                line-height: 1.6;
                color: #333;
              }
              
              .hooks-explanation code {
                background-color: #f1f2f6;
                padding: 2px 4px;
                border-radius: 4px;
                font-family: monospace;
              }
              
              .hooks-explanation ul {
                padding-left: 20px;
              }
              
              .hooks-explanation li {
                margin-bottom: 8px;
                line-height: 1.5;
              }
              
              .code-example {
                margin-top: 20px;
                background-color: #2c3e50;
                color: #ecf0f1;
                padding: 15px;
                border-radius: 6px;
                overflow-x: auto;
              }
              
              .code-example pre {
                margin: 0;
                font-family: 'Courier New', Courier, monospace;
                font-size: 14px;
                line-height: 1.4;
              }
            `}</style>
          </div>
        );
    }
  };

  // Render router
  return <div className="clase3-container">{renderContent()}</div>;
};

export default Clase3Router;