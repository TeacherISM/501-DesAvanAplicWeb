import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Button from './class2/Components/button';
import Login from './class2/Pages/log_in';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [count, setCount] = useState(0);
  return currentPage === 'home' ? (
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
          <Button label="Log in" onClick={() => setCurrentPage('login')} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  ) : (
    <Login />
  );
}

export default App;
