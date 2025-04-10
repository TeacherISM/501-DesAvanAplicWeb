import React from 'react';
import { ButtonProps } from '../types/common';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        style={{
            padding: '10px 20px',
            backgroundColor: disabled ? '#ccc' : 'pink',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            margin: '8px',
            cursor: disabled ? 'not-allowed' : 'pointer',
        }}
    >
        {label}
    </button>
);

export default Button;
