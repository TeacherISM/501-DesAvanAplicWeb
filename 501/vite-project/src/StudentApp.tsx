// StudentApp.tsx
import React, { useEffect } from 'react';
import A01781041Router from './A01781041'; // Main student router
import Class1Router from './A01781041/Clase1 '; // Class 1 router
import Clase2Router from './A01781041/Clase2'; // Class 2 router
import Clase3Router from './A01781041/Clase3'; // Class 3 router

// Check if this is being loaded inside an iframe
const isInIframe = () => {
  try {
    return window !== window.parent;
  } catch (e) {
    return true;
  }
};

// Parse the hash from the URL
const getComponentFromHash = () => {
  const hash = window.location.hash.substring(1);
  
  // Check if it's a specific class1 component
  if (hash.startsWith('/class1/')) {
    return {
      type: 'class1Component',
      component: hash.replace('/class1/', '')
    };
  }
  
  // Check if it's class2
  if (hash === '/class2') {
    return {
      type: 'class2',
      component: null
    };
  }
  
  // Check if it's class3
  if (hash === '/class3') {
    return {
      type: 'class3',
      component: null
    };
  }
  
  // Default to main student router
  return {
    type: 'main',
    component: null
  };
};

const StudentApp: React.FC = () => {
  // If not in iframe, redirect to HTML page
  if (!isInIframe()) {
    useEffect(() => {
      window.location.href = '/michael-devlyn.html';
    }, []);
    return <div>Loading student page...</div>;
  }
  
  // Determine which component to render based on hash
  const { type, component } = getComponentFromHash();
  
  // Render the appropriate component
  switch (type) {
    case 'class1Component':
      // For Class 1, we need to set the hash to just the component name
      useEffect(() => {
        if (component) {
          // Replace the hash without triggering a page reload
          window.history.replaceState(
            null, 
            '', 
            `#${component}`
          );
        }
      }, [component]);
      
      return <Class1Router />;
      
    case 'class2':
      return <Clase2Router />;
      
    case 'class3':
      return <Clase3Router />;
      
    default:
      return <A01781041Router />;
  }
};

export default StudentApp;