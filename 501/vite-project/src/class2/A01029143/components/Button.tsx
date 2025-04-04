import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
      {label}
    </button>
  );
};

export default Button;