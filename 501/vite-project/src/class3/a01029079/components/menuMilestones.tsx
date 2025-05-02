// src/components/Menu.tsx
import React from 'react';

const MenuMilestones: React.FC = () => {

  return (
    <div className="menu-container">
      <h1 className='menu-title'>Andrés Jaramillo Barón A01029079</h1>
      <h2 className="menu-title">Menú Milestones</h2>
      <div className="menu-buttons">
        <a href="../../../../../src/class3/a01029079/public/menu1.html" className="btn"> Milestone 1</a>
        <a href="../../../../../src/class3/a01029079/public/menu2.html" className="btn"> Milestone 2 </a>
        <a href="../../../../../" className="btn"> Return </a>
      </div>
    </div>
  );
};

export default MenuMilestones;