import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import nana from './assets/nana.jpg';
import './App.css';
import Login from './class2/A01784875/login'; // Importing the Login component

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false); // Track whether to show the login page

  const handleLoginClick = () => {
    setIsLoginPage(true); // Show the Login component when the image is clicked
  };

  if (isLoginPage) {
    return <Login />; // Render the Login component when in the login page state
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
        <a>
          <img
            src={nana}
            className="logo"
            alt="A01784875"
            style={{ cursor: 'pointer' }}
            onClick={handleLoginClick} // Trigger login when the image is clicked
          />
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