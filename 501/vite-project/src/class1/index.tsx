// This is a bridge file to redirect to the proper module
import React from 'react';

// Import the components from the actual location
import ES6Features from '../A01781041/Clase1 /ES6Features';
import AdvancedJS from '../A01781041/Clase1 /AdvancedJS';
import LoginDashboard from '../A01781041/Clase1 /LoginDashboard';

// A simple router component that will detect the query parameter and show the right component
const ClassOne: React.FC = () => {
  // Get the subcomponent from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const subcomponent = urlParams.get('subcomponent');
  
  // Render the appropriate component based on the subcomponent
  switch (subcomponent) {
    case 'es6features':
      return <ES6Features />;
    case 'advancedjs':
      return <AdvancedJS />;
    case 'logindashboard':
      return <LoginDashboard />;
    default:
      // If no hash is provided, show a menu
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h2>Class 1: Advanced JavaScript</h2>
          <p>Please select a component to view:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a 
                href="?component=class1&subcomponent=es6features" 
                style={{ 
                  display: 'block',
                  padding: '10px 15px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: '#333',
                  fontWeight: 'bold'
                }}
              >
                ES6 Features
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a 
                href="?component=class1&subcomponent=advancedjs" 
                style={{ 
                  display: 'block',
                  padding: '10px 15px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: '#333',
                  fontWeight: 'bold'
                }}
              >
                Advanced JS
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a 
                href="?component=class1&subcomponent=logindashboard" 
                style={{ 
                  display: 'block',
                  padding: '10px 15px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: '#333',
                  fontWeight: 'bold'
                }}
              >
                Login Dashboard
              </a>
            </li>
          </ul>
        </div>
      );
  }
};

export default ClassOne;