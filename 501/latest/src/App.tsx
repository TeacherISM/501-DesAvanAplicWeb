import { useState, useEffect, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassOne from './class1'


function App() {
  const [count, setCount] = useState(0);
  const [shouldShowComponent, setShouldShowComponent] = useState(false);
  const [componentToRender, setComponentToRender] = useState<string | null>(null);

  const openStudentWork = () => {
    window.open('/michael-devlyn.html', '_blank', 'width=1200, height=800');
  }

  // Check URL parameters to see if we should render a specific component
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const component = urlParams.get('component');
    
    if (component) {
      setComponentToRender(component);
      setShouldShowComponent(true);
    }
  }, []);

  // If we're showing a specific component, render just that
  if (shouldShowComponent && componentToRender === 'class1') {
    return (
      
      <Suspense fallback={<div>Loading...</div>}>
        <ClassOne />
      </Suspense>
    );
  }

  // Otherwise, render the regular home page
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
      </div>

      <div className="student-button-container" style={{ marginTop: '30px'}}>
        <button
        onClick={openStudentWork}
        style={{
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        >
        Michael Devlyn - A01781041
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
