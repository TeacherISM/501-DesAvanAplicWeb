// src/class3/A01029143/pages/Clase1.tsx

import React from 'react';

// Datos simulados para mostrar destructuring y map
const topics = [
  { title: "Arrow Functions", link: "#arrow-functions" },
  { title: "Destructuring", link: "#destructuring" },
  { title: "Template Literals", link: "#template-literals" },
  { title: "Modules", link: "#modules" },
];

// Componente funcional con arrow function (ES6+)
const Clase1: React.FC = () => {
  // Función para saludar usando destructuring + template literals
  const greet = ({ name, age }: { name: string; age: number }) =>
    `Hola, ${name}! Tienes ${age} años.`;

  const user = { name: "Estudiante", age: 21 };

  return (
    <div>
      <h1>Clase 1: Repaso de ES6+</h1>
      <p>{greet(user)}</p>

      <h2>Temas cubiertos</h2>
      <ul>
        {topics.map(({ title, link }) => (
          <li key={title}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>

      <p>
        <a href="/src/class3/A01029143/pages/Menu.html">Volver al menú</a>
      </p>
    </div>
  );
};

export default Clase1;
