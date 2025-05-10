import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '12px',
        width: '100%',
        display: 'block',
      }}
    />
  );
};

export default InputField;
