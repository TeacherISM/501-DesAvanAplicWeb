import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '10px', padding: '10px 20px' }}>
      {label}
    </button>
  );
};

export default Button;
