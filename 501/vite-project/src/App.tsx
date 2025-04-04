import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Button from './class2/A01028889/button';
import Login from './class2/A01028889/login';

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState('index');

  return (
    <>
      {currentPage === 'index' ? (
        <div>
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
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <a href={'/A01028889/home.html'} className="button-link">
            Go to Class 3
          </a>
        </div >
      ) : (
        <Login />
      )
      }
    </>
  );
}

export default App;