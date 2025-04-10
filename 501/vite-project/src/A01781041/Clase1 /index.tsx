// src/A01781041/Clase1/index.tsx
import React, { useState } from 'react';
import ES6Features from './demos/ES6Features';
import AdvancedJS from './AdvancedJS';
import LoginDashboard from './LoginDashboard';
import FallbackComponent from './common/FallbackComponent';

// This component will act as a very simple router for our demos
const Class1Router: React.FC = () => {
  const [activePath, setActivePath] = useState<string | null>(null);
  
  // When mounted, try to determine which component to load from URL or sessionStorage
  React.useEffect(() => {
    // This is a simple approach - in a real app you'd use a proper router
    const savedPath = sessionStorage.getItem('class1_path');
    const urlPath = window.location.hash.substring(1);
    
    if (urlPath) {
      setActivePath(urlPath);
      sessionStorage.setItem('class1_path', urlPath);
    } else if (savedPath) {
      setActivePath(savedPath);
    }
  }, []);
  
  // Function to render the appropriate component based on path
  const renderContent = () => {
    // If no path is selected, show navigation
    if (!activePath) {
      return (
        <div style={{ padding: '20px' }}>
          <h2>Class 1: Advanced JavaScript Concepts</h2>
          <p>Select a demo to view:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px', marginTop: '20px' }}>
            <button 
              onClick={() => handleNavigation('es6features')}
              style={buttonStyle}
            >
              <h3>ES6+ Features</h3>
              <p>Arrow functions, destructuring, template literals, and modules</p>
            </button>
            
            <button 
              onClick={() => handleNavigation('advancedjs')}
              style={buttonStyle}
            >
              <h3>Advanced JS Practice</h3>
              <p>Fetch data from mock API using ES6+ features</p>
            </button>
            
            <button 
              onClick={() => handleNavigation('logindashboard')}
              style={buttonStyle}
            >
              <h3>Basic UI</h3>
              <p>Login page & dashboard with placeholder content</p>
            </button>
          </div>
        </div>
      );
    }
    
    // Render the selected component or fallback
    try {
      switch (activePath.toLowerCase()) {
        case 'es6features':
          return <ES6Features />;
        case 'advancedjs':
          return <AdvancedJS />;
        case 'logindashboard':
          return <LoginDashboard />;
        default:
          return <FallbackComponent 
            componentName={activePath} 
            errorMessage={`Unknown component: ${activePath}`} 
          />;
      }
    } catch (error) {
      return <FallbackComponent 
        componentName={activePath} 
        errorMessage={`Error loading component: ${error instanceof Error ? error.message : String(error)}`} 
      />;
    }
  };
  
  // Handle navigation 
  const handleNavigation = (path: string) => {
    setActivePath(path);
    window.location.hash = path;
    sessionStorage.setItem('class1_path', path);
  };
  
  // Handle back navigation
  const handleBack = () => {
    setActivePath(null);
    window.location.hash = '';
    sessionStorage.removeItem('class1_path');
  };
  
  return (
    <div>
      {activePath && (
        <button 
          onClick={handleBack}
          style={{
            margin: '20px',
            padding: '8px 16px',
            backgroundColor: '#7f8c8d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ← Back to Menu
        </button>
      )}
      
      {renderContent()}
    </div>
  );
};

// Shared button style
const buttonStyle = {
  backgroundColor: '#ecf0f1',
  color: '#333',
  border: '1px solid #ddd',
  padding: '15px',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  textAlign: 'left' as const,
  transition: 'all 0.3s',
};

export default Class1Router;