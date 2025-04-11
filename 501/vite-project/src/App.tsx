import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './class2/A01784568/Login'
import TravelRequest from './class3/A01784568/TravelRequest'

type View = 'home' | 'menu' | 'login' | 'travelRequest';

function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState<View>('home');

  if (view === 'menu') {
    return(
      <>
        <h1 className="text-2xl font-bold mb-4">Menú</h1>
        <div className="space-x-4">
          <button
            onClick={() => setView('login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => setView('travelRequest')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Travel Request
          </button>
        </div>
      </>
    )
  }

  if (view === 'login') {
    return(
      <>
      <Login/>
      <button onClick={() => setView('menu')}>Regresar</button>
        
      
      </>
    )
  }

  if (view === 'travelRequest') {
    return(
      <>
      <TravelRequest/>
      <button onClick={() => setView('menu')}>Volver al Menú</button>
      </>
    )
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => setView('menu')}>Diego Valencia Moreno</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App