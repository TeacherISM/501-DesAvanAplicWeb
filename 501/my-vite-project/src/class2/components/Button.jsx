import React from "react";
import "../index.css"; // Import the CSS file

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default Button;