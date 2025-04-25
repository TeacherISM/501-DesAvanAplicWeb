import React from "react";

type InputFieldProps = {
  type: string;
  name: string; // Se agrega name para identificar el input
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ type, name, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={({ target: { name, value } }) => onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>)} 
    style={{ padding: "10px", margin: "10px 0", border: `1px solid ${value ? "black" : "red"}` }} // Uso de template literals
  />
);

export default InputField;




// import React from 'react';

// type InputFieldProps = {
//   type: string;
//   placeholder?: string;
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       style={{ padding: '10px', margin: '10px 0' }}
//     />
//   );
// };

// export default InputField;