import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', margin: '10px 0' }}
    />
  );
};

export default InputField;