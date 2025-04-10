// src/A01781041/Clase3/components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  label,
  error
}) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        className={error ? 'input-with-error' : ''}
      />
      {error && <p className="error-message">{error}</p>}
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .input-field {
          margin-bottom: 16px;
          width: 100%;
        }
        
        .input-label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #333;
        }
        
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        input:focus {
          border-color: #3498db;
          outline: none;
        }
        
        .input-with-error {
          border-color: #e74c3c;
        }
        
        .error-message {
          color: #e74c3c;
          font-size: 14px;
          margin-top: 4px;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default InputField;