import React from 'react';

const Menu: React.FC = () => {

  return (
    <div className="menu-container">
        <h1 className="menu-title"> Menu Page </h1>
        <p className="menu-text"> Welcome to the menu page by: Pedro Mauri Mtz - A01029143! </p>
        <ul>
            <a href = "../../../../../src/class1/A01029143/pages/Clase1.html" className='button'> Clase1 </a>
            <a href = "../../../../../src/class2/A01029143/pages/Login.html" className='button'> Clase2 </a>
            <a href = "../../../../../src/class3/A01029143/pages/Clase3.html" className='button'> Clase3 </a>
            <a href = "../../../../../" className='button'> Return </a>
        </ul>
    </div>
  );
};

export default Menu;
