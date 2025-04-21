// src/components/Menu.tsx
import React from 'react';

const Menu: React.FC = () => {

  return (
    <div className="menu-container">
      <h1 className='menu-title'> Andrés Jaramillo Barón A01029079</h1>
      <h2 className="menu-title">Menú</h2>
      <div className="menu-buttons">
        <a href="../../../../../src/class1/a01029079/public/class1.html" className="btn"> Class 1 </a>
        <a href="../../../../../src/class2/a01029079/public/class2.html" className="btn"> Class 2 </a>
        <a href="../../../../../src/class3/a01029079/public/class3.html" className="btn"> Class 3 </a>
        <a href="../../../../../" className="btn"> Return </a>
      </div>
    </div>
  );
};

export default Menu;