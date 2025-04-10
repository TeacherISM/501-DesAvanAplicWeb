import React from 'react';
import { InputFieldProps } from '../types/common';

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
            padding: '10px',
            margin: '15px 0',
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '10px',
        }}
    />
);

export default InputField;