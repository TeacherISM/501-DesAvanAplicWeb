// src/A01781041/Clase3/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  type = 'primary',
  disabled = false
}) => {
  return (
    <button 
      className={`button ${type}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .button {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          min-width: 120px;
        }
        
        .button:hover:not(:disabled) {
          transform: translateY(-2px);
        }
        
        .button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .primary {
          background-color: #3498db;
          color: white;
        }
        
        .primary:hover:not(:disabled) {
          background-color: #2980b9;
        }
        
        .secondary {
          background-color: #ecf0f1;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
        }
        
        .secondary:hover:not(:disabled) {
          background-color: #dfe6e9;
        }
        
        .danger {
          background-color: #e74c3c;
          color: white;
        }
        
        .danger:hover:not(:disabled) {
          background-color: #c0392b;
        }
        
        .button:disabled {
          background-color: #95a5a6;
          color: #ecf0f1;
          cursor: not-allowed;
        }
      `}</style>
    </button>
  );
};

export default Button;