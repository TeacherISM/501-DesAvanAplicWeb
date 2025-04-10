import React from "react";
import Login from "./loginPage";


function Class2() {
  return (
    <div className="p-4 space-y-6">
      <div className="border p-4 rounded shadow bg-white">
        <h3> Login que utiliza los componentes de botton e imputFile proporcionados por el profesor, cambiados a tsx y utilizando lo visto en clase 1 (arrow function, destructuring)</h3>
        <Login />
      </div>
      <h1></h1>
      <div>
      <a href="/"> <button>Inicio</button></a> <a href="/menu/menu.html"><button>Menu</button></a>
      </div>
    </div>
  );
};

export default Class2