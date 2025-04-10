// src/A01781041/index.tsx
import React from 'react';
import ES6Features from './Clase1 /ES6Features';
import AdvancedJS from './Clase1 /AdvancedJS';
import LoginDashboard from './Clase1 /LoginDashboard';
import Clase2Router from './Clase2';
import Clase3Router from './Clase3';

// Simple component to show a welcome page with links to the implementations
const WelcomePage: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#2c3e50' }}>Michael Devlyn - A01781041</h1>
      <h2 style={{ color: '#3498db' }}>Advanced Web Development</h2>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Class 1 Implementations</h3>
        <p>Click on any link below to view the implementations:</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            padding: '15px',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }} onClick={() => window.location.href = '#/class1/es6'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>ES6+ Features</h4>
            <p style={{ color: '#7f8c8d', margin: '0' }}>
              Arrow functions, destructuring, template literals, and modules
            </p>
          </div>
          
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            padding: '15px',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }} onClick={() => window.location.href = '#/class1/advanced'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Advanced JS</h4>
            <p style={{ color: '#7f8c8d', margin: '0' }}>
              Fetch data from mock API using ES6+ features
            </p>
          </div>
          
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            padding: '15px',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }} onClick={() => window.location.href = '#/class1/login'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Login Dashboard</h4>
            <p style={{ color: '#7f8c8d', margin: '0' }}>
              Login page & dashboard with placeholder content
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Class 2 Implementations</h3>
        <p>Explore React basics and components:</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            padding: '15px',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }} onClick={() => window.location.href = '#/class2'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Travel Request Cards</h4>
            <p style={{ color: '#7f8c8d', margin: '0' }}>
              Reusable card components with props and styling
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Class 3 Implementations</h3>
        <p>Advanced React hooks for state management:</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            padding: '15px',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }} onClick={() => window.location.href = '#/class3'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Login with useReducer</h4>
            <p style={{ color: '#7f8c8d', margin: '0' }}>
              Advanced state management using useReducer for forms
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>More Classes Coming Soon</h3>
        <p>Additional implementations for future classes will be available here.</p>
      </div>
    </div>
  );
};

// A router to handle the different class implementations
const StudentRouter: React.FC = () => {
  // Get the current path
  const path = window.location.hash.substring(1);
  
  // Router logic
  switch (path) {
    case '/class1/es6':
      return <ES6Features />;
    case '/class1/advanced':
      return <AdvancedJS />;
    case '/class1/login':
      return <LoginDashboard />;
    case '/class2':
      return <Clase2Router />;
    case '/class3':
      return <Clase3Router />;
    default:
      return <WelcomePage />;
  }
};

export default StudentRouter;