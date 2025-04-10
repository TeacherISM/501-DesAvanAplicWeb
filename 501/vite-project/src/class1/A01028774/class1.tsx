import React from "react";

// Importa los componentes
import ArrowFunction from "./arrowfunctions_ex";
import Destructuring from "./destructuring_ex";
import TemplateLiterals from "./templateliterals_ex";

function Class1() {
  return (
    <div className="p-4 space-y-6">
      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Ejemplo: Arrow Function</h2>
        <h3> Muestra una imagen del Pokémon Ralts, al hacer clic sobre la imagen, esta cambia dinámicamente para mostrar a su evolución (Kirlia), utilizando una "arrow function" para manejar el evento de clic.</h3>
        <ArrowFunction />
      </div>

      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Ejemplo: Destructuring</h2>
        <h3>Formulario: nombre, primer apellido y segundo apellido, al enviarlo, se muestra una alerta con el nombre completo. El componente utiliza destructuring para manejar los valores del formulario de forma clara y eficiente.</h3>
        <Destructuring />
      </div>

      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-bold mb-2">Ejemplo: Template Literals</h2>
        <h3>Un saludo dinámico que cambia de color cuando haces clic en un botón. El texto se genera usando template literals para construir strings como "¡Hola, profesor!", y también para aplicar estilos como el color del texto de forma dinámica.</h3>
        <TemplateLiterals />
      </div>
      <h1></h1>
      <div>
      <a href="/"> <button>Inicio</button></a> <a href="/menu/menu.html"><button>Menu</button></a>
      </div>
    </div>
  );
};

export default Class1;