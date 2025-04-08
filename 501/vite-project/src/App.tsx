import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Class2/A01783317/login'
import GreetPage from './class1/A01783317/GreetButton';
 // Import the GreetPage component


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
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
              <div className="app-home">
              <a href="/landing.html">
                <button className="name-button">Domingo Mora</button>
              </a>
            </div>
            </>
          }
        />
        <Route path="/greet" element={<GreetPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App