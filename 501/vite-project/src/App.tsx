import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import nana from './assets/nana.jpg';
import './App.css';
import Login from './class3/A01784875/login';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const handleLoginClick = () => {
    setIsLoginPage(true);
  };

  if (isLoginPage) {
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
      <div className="card">
        <a href="../A01784875/login" target="_blank">
          <img src={nana} className="logo react" alt="A01784875" />
        </a>
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