import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CounterPage from './src/class3/A01028535'; // Importamos la nueva página de contador


const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {/* Agregar un botón que nos lleva a la página de contador */}
        <Link to="/counter">
          <button>Ir a la página del contador</button>
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Configurar las rutas */}
      <Switch>
        <Route path="/counter" component={CounterPage} />
      </Switch>
    </Router>
  );
};

export default App;
