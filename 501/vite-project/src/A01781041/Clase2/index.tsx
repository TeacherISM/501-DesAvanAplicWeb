// src/A01781041/Clase2/index.tsx
import React, { useState, useEffect } from 'react';
import TravelDashboard from './TravelDashboard';

const Clase2Router: React.FC = () => {
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
      sessionStorage.setItem('clase2Path', newPath);
    };

    // Load stored path from session
    const storedPath = sessionStorage.getItem('clase2Path');
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
      case 'travel':
        return <TravelDashboard />;
      default:
        // Menu view
        return (
          <div className="clase2-menu">
            <h2>Class 2 - React Basics</h2>
            <div className="menu-buttons">
              <button onClick={() => navigateTo('travel')}>
                Travel Request Cards
              </button>
            </div>
            
            {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
            <style jsx>{`
              .clase2-menu {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
              }
              
              h2 {
                color: #3a74ae;
                margin-bottom: 30px;
              }
              
              .menu-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
                max-width: 300px;
                margin: 0 auto;
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
            `}</style>
          </div>
        );
    }
  };

  // Render router
  return <div className="clase2-container">{renderContent()}</div>;
};

export default Clase2Router;