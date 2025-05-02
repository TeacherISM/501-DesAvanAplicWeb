import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {text}
    </button>
  );
};

export default Button;