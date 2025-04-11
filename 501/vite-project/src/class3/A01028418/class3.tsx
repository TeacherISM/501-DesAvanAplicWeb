import React, { useState } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";
import TravelRequestForm from "./components/TravelRequest";
import "./class3.css"

const Class3: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<string>("Counter");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Counter":
        return <Counter />;
      case "Login":
        return <Login />;
      case "TravelRequestForm":
        return <TravelRequestForm />;
      default:
        return <Counter />;
    }
  };

  return (
    <>
    <div>
      <h1>Multi-Component Application</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setCurrentComponent("Counter")}>Counter</button>
        <button onClick={() => setCurrentComponent("Login")}>Login</button>
        <button onClick={() => setCurrentComponent("TravelRequestForm")}>
          Travel Request Form
        </button>
      </nav>
      <div>{renderComponent()}</div>
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

export default Class3;

