// src/components/Menu.tsx
import React from 'react';

const Menu2: React.FC = () => {

  return (
    <div className="menu-container">
      <h1 className='menu-title'> A01029079 - A01028889 - A01027893 - A01029143</h1>
      <h2 className="menu-title">Menú Milestone 2</h2>
      <div className="menu-buttons">
        <a href="../../../../../src/class4/a01029079/public/class4.html" className="btn"> Class 4 </a>
        <a href="../../../../../src/class5/a01029079/public/class5.html" className="btn"> Class 5 </a>
        <a href="../../../../../src/class6/a01029079/public/class6.html" className="btn"> Class 6 </a>
        <a href="../../../../../src/class3/a01029079/public/menuMilestones.html" className="btn"> Return </a>
      </div>
    </div>
  );
};

export default Menu2;