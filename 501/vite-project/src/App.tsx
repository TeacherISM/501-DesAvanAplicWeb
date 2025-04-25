import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';



const App = () => {
  const [count, setCount] = useState(0);
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
        <button onClick={() => setCount((prev) => prev + 1)}>
          {`count is ${count}`}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <h2>{`Milestone`}</h2>
      <div>
        <a href="/public/A01028774/menu.html">
          <button>Menú de las clases</button>
        </a>
      </div>
      <p className="read-the-docs">
      Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="/src/class1/A01027983/">
          <button>A01027983</button>
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

export default App;