import React from "react";
import Counter from "./countuseState_ex";
import Login from "./loginState_ex";
import TravelRequestForm from "./travelReducer_ex"; 


function Class3() {
  return (
    <div className="p-4 space-y-6">
      <div className="border p-4 rounded shadow bg-white">
      </div>
      <h1></h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Ejemplo: useState Hook</h2>
        <h3>Contador que utiliza el hook useState para manejar el estado del contador. Al hacer clic en los botones, se incrementa o decrementa el valor del contador.</h3>
        <Counter />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Ejemplo: useState y useEffect Hook</h2>
        <h3>Login que usa los hooks useState y useEffect para manejar el "inicio" guardando los datos </h3>
        <Login />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Ejemplo: useReducer Hook</h2>
        <h3>Formulario de solicitud de viaje que utiliza el hook useReducer para manejar el estado del formulario. Al enviar el formulario, se muestra una alerta con los datos ingresados.</h3>
        <TravelRequestForm />
      </div>
      <h1></h1> 
      <div>
      <a href="/"> <button>Inicio</button></a> <a href="/menu/menu.html"><button>Menu</button></a>
      </div>
    </div>
  );
};

export default Class3