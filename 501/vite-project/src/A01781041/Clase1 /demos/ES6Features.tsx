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
  
  // Common tab button style
  const getTabStyle = (isActive: boolean) => ({
    padding: '12px 24px',
    background: isActive ? '#f0f4f8' : 'none',
    border: 'none',
    borderTop: isActive ? '1px solid #d0d7de' : 'none',
    borderLeft: isActive ? '1px solid #d0d7de' : 'none',
    borderRight: isActive ? '1px solid #d0d7de' : 'none',
    borderBottom: isActive ? 'none' : '1px solid #d0d7de',
    borderRadius: isActive ? '4px 4px 0 0' : '0',
    fontSize: '16px',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#1a365d' : '#4a5568',
    cursor: 'pointer',
    marginBottom: isActive ? '-1px' : '0',
    position: 'relative' as const,
    zIndex: isActive ? 1 : 0,
  });
  
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#1a365d', marginBottom: '24px', fontSize: '28px' }}>ES6+ Features</h2>
      
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid #d0d7de', 
        marginBottom: '24px',
        backgroundColor: '#ffffff'
      }}>
        <button 
          onClick={() => setActiveFeature('arrow')}
          style={getTabStyle(activeFeature === 'arrow')}
        >
          Arrow Functions
        </button>
        
        <button 
          onClick={() => setActiveFeature('destructuring')}
          style={getTabStyle(activeFeature === 'destructuring')}
        >
          Destructuring
        </button>
        
        <button 
          onClick={() => setActiveFeature('template')}
          style={getTabStyle(activeFeature === 'template')}
        >
          Template Literals
        </button>
        
        <button 
          onClick={() => setActiveFeature('modules')}
          style={getTabStyle(activeFeature === 'modules')}
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