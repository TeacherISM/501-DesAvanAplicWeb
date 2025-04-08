// src/A01781041/Clase1/demos/ES6Features.tsx
import React, { useState } from 'react';
import ArrowFunctionDemo from './ArrowFunctionDemo';
import DestructuringDemo from './DestructuringDemo';
import TemplateLiteralsDemo from './TemplateLiteralsDemo';
import ModuleDemo from './ModuleDemo';

const ES6Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('arrow');
  
  const renderFeatureContent = () => {
    switch (activeFeature) {
      case 'arrow':
        return <ArrowFunctionDemo />;
      case 'destructuring':
        return <DestructuringDemo />;
      case 'template':
        return <TemplateLiteralsDemo />;
      case 'modules':
        return <ModuleDemo />;
      default:
        return <p>Select a feature to view its example.</p>;
    }
  };
  
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>ES6+ Features</h2>
      
      <div style={{ display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveFeature('arrow')}
          style={{
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            opacity: activeFeature === 'arrow' ? 1 : 0.7,
            fontWeight: activeFeature === 'arrow' ? 'bold' : 'normal',
            borderBottom: activeFeature === 'arrow' ? '3px solid #3498db' : 'none',
          }}
        >
          Arrow Functions
        </button>
        
        <button 
          onClick={() => setActiveFeature('destructuring')}
          style={{
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            opacity: activeFeature === 'destructuring' ? 1 : 0.7,
            fontWeight: activeFeature === 'destructuring' ? 'bold' : 'normal',
            borderBottom: activeFeature === 'destructuring' ? '3px solid #3498db' : 'none',
          }}
        >
          Destructuring
        </button>
        
        <button 
          onClick={() => setActiveFeature('template')}
          style={{
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            opacity: activeFeature === 'template' ? 1 : 0.7,
            fontWeight: activeFeature === 'template' ? 'bold' : 'normal',
            borderBottom: activeFeature === 'template' ? '3px solid #3498db' : 'none',
          }}
        >
          Template Literals
        </button>
        
        <button 
          onClick={() => setActiveFeature('modules')}
          style={{
            padding: '10px 20px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            opacity: activeFeature === 'modules' ? 1 : 0.7,
            fontWeight: activeFeature === 'modules' ? 'bold' : 'normal',
            borderBottom: activeFeature === 'modules' ? '3px solid #3498db' : 'none',
          }}
        >
          Modules
        </button>
      </div>
      
      <div style={{ minHeight: '400px' }}>
        {renderFeatureContent()}
      </div>
    </div>
  );
};

export default ES6Features;