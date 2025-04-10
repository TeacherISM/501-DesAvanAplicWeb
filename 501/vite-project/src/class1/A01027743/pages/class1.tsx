import React, { useState } from 'react';
import '../styles/class1.css';


const BowFunction: React.FC = () => {
    // variable to return menu
    const handleRedirect = () => {
        window.location.href = '/A01027743/menu.html';
      };
    
    
    // Arrow function con sort
    const numbers = [798, 35, 68, 2342, 234];
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    
    // Destructuring array
    const person = {
        student: [
            { nombre: 'Emily', edad: 21 },
            { nombre: 'Jorge', edad: 22 },
            { nombre: 'Juli', edad: 20 },
        ]
    };
    // Destructuring object
    const [first] = person.student;
    
    // State for the input field
    const [nombreUsuario, setNombreUsuario] = useState('');


  return (
    <>
    <button className='back-to' onClick={handleRedirect}> menu </button>

    <div className="container">
      <h1>Arrow functions</h1>

      <div className="row"> 
        <p>Original numbers: {numbers.join(', ')}</p>
        <p>Sorted numbers: {sortedNumbers.join(', ')}</p>
      </div>

      <h1>Destructuring</h1>

      <div className="row">
        <p><strong>all students:</strong></p>
        <ul>
          {person.student.map((est, index) => (
            <li key={index}>{est.nombre} is {est.edad} years old</li>
          ))}
        </ul>

        <p><strong>first student:</strong></p>
        <p>{first.nombre} is {first.edad} years old</p>
      </div>

      <h1>Template Literal</h1>

      <div className="row">
        <input
          type="text"
          placeholder="write your name"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
        {nombreUsuario && (
          <p>{`Hi ${nombreUsuario} !`}</p>
        )}
      </div>

    </div>
    </>
  );
};

export default BowFunction;
