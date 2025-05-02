import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./class2/A01028517/login";

function App() {
  const [count, setCount] = useState(0);

  
  const [showLogin, setShowLogin] = useState(false);
  if (showLogin) {
    return <Login />;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <a href="../src/class3/a01029079/public/menu.html">A01029079</a>
      <div className="card">
        <button onClick={() => window.location.href = '/A01028796/menu.html'}>
          Ir al menú
        </button>
        <div>
          <a href="/public/A01027913/Menu.html">
            <button>Menu</button>
          </a>
        </div>
        <a href="/public/A01028517/Menú.html"><button>Link menu A01028517</button></a>
        <a href="/public/A01028517/Milestone2/Milestone2_Menu.html"><button>Link menu Milestone2</button></a>


        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <a href="/public/A01028033/menu/milestoneMenu.html">
          <button>A01028033's Menu Button!</button>
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="/src/class1/A01027983/">
          <button>A01027983 and A01784875</button>
        </a>
        <a href='../src/class3/A01029143/pages/Menu.html'>
          Menu A01029143
        </a>
      </div>
      <a href="/public/A01028418/menu.html">
        <button>A01028418</button>
      </a>
    </>
  );
}

export default App
