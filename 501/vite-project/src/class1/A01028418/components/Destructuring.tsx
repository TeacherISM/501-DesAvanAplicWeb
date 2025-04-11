import React from "react";
import "../class1.css"

const Destructuring = ({ user }: { user: { name: string; age: number; country: string; skills: string[] } }) => {
  // Usamos destructuring para extraer propiedades del objeto `user`
  const { name, age, country, skills } = user;

  return (
    <div>
      <h2>Perfil de {name}</h2>
      <p>Edad: {age}</p>
      <p>País: {country}</p>
      <p>Habilidades:</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Destructuring;

