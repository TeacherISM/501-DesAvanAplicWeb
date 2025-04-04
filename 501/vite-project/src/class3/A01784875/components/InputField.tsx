import React from 'react';

interface InputFieldProps {
  type: string; // type prop should be a string
  placeholder: string; // placeholder prop should be a string
  value: string; // value prop should be a string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange should be a function with a change event as a parameter
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', margin: '10px 0' }}
    />
  );
};

export default InputField;
