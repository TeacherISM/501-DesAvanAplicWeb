import React from 'react';

interface ButtonProps {
  label: string; // label prop should be a string
  onClick: () => void; // onClick prop should be a function that returns nothing
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
      {label}
    </button>
  );
};

export default Button;
