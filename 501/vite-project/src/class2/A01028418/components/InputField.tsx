import React from "react";

const InputField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{ padding: "10px", margin: "10px" }} 
    />
  );
};

export default InputField;

