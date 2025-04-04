import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//botton
import Button from './class2/Components/button';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Redirige a la ruta /login
  };

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
      <div className="card">
        <div className="botton-container">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          {/* Cambia el onClick para redirigir al login */}
          <Button label="Log in" onClick={handleLoginClick} />
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;