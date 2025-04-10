// src/A01781041/Clase1/common/FallbackComponent.tsx
import React from 'react';

interface FallbackComponentProps {
  componentName: string;
  errorMessage?: string;
}

const FallbackComponent: React.FC<FallbackComponentProps> = ({ 
  componentName, 
  errorMessage = "Component not found, check the file path or create a minimal example!" 
}) => {
  // Log error to console
  React.useEffect(() => {
    console.error(`Failed to load component: ${componentName}`);
    console.error(errorMessage);
  }, [componentName, errorMessage]);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff8e1',
      border: '1px solid #ffecb3',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h3 style={{ color: '#e65100', marginTop: 0 }}>Component Error</h3>
      <p><strong>Component:</strong> {componentName}</p>
      <p>{errorMessage}</p>
      <div style={{
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginTop: '15px'
      }}>
        <code>console.error('{errorMessage}');</code>
      </div>
    </div>
  );
};

export default FallbackComponent;