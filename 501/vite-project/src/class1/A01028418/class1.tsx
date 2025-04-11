import React from 'react';
import  Destructuring  from './components/Destructuring';
import  TemplateLiteral  from './components/TemplateLiteral';
import  ArrowFunction  from './components/ArrowFunction';
import "./class1.css"

const Class1 = () => {
  const user = {
    name: "Luis",
    age: 30,
    country: "México",
    skills: ["TypeScript", "React", "Node.js"],
    activity: "cantar",
  };

  return (
    <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ejemplo de Arrow Functions, Destructuring y Template Literals</h1>

      {/* Arrow Function Example */}
      <section style={{ margin: "20px 0" }}>
        <h2>Funciones Flecha</h2>
        <ArrowFunction />
      </section>

      {/* Destructuring */}
      <section style={{ margin: "20px 0" }}>
        <h2>Destructuring</h2>
        <Destructuring user={user} />
      </section>

      {/* Template Literal Example */}
      <section style={{ margin: "20px 0" }}>
        <h2>Template Literals</h2>
        <TemplateLiteral user={user} />
      </section>
    </div>
    <div>
      <a href="/">
        <button>Página de Inicio</button>
      </a>
      <a href="/public/A01028418/menu.html">
        <button>Menú</button>
      </a>
    </div>
    </>
  );
};

export default Class1;
