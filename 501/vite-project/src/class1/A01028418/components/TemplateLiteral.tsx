import React from "react";

const TemplateLiterals = ({ user }: { user: { name: string; activity: string; time: string } }) => {
  // Usamos un template literal para generar un mensaje dinámico
  const message = `Hola, ${user.name}! ¡Sigue disfrutando al ${user.activity}!`;

  return <p>{message}</p>;
};

export default TemplateLiterals;

