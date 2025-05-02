import React from "react";

const InputField = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: "10px", margin: "10px" }} 
    />
  );
};

export default InputField;

