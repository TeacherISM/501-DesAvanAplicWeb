import {} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './login';

function App() {
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
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Botón para ir a la página de login */}
      <div>
        <a href="/login">
          <button>Ir a Login</button>
        </a>
      </div>

      {/* Página de Login */}
      <div id="login-page" style={{ display: window.location.pathname === '/login' ? 'block' : 'none' }}>
        <Login />
      </div>
    </>
  );
}

export default App;
