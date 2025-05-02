import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './class2/A01663909/button.tsx';
import Login from './class2/A01663909/login';
import Navigation from './Navigation';
import TravelRequestForm from './class3/A01663909/form';
import ExpenseForm from './class4/A01663909/ExpenseForm.tsx';
import Dashboard from './class4/A01663909/Dashboard.tsx';
import { UserProvider } from './class4/A01663909/UserContext';

// Updated Page type to include all pages
type Page = 'home' | 'login' | 'blank' | 'navigation' | 'form' | 'expense' | 'dashboard';

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'navigation':
        return <Navigation setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'form':
        return <TravelRequestForm />;
      case 'expense':
        return <ExpenseForm />;
      case 'dashboard':
        return <Dashboard />;
      default:
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
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <Button label="Natalia Rodriguez" onClick={() => setCurrentPage('navigation')} />
            </div>
          </>
        );
    }
  };

  return (
    <UserProvider>
      <>
        {renderPage()}
        {currentPage !== 'home' && currentPage !== 'navigation' && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Volver a Navegación" onClick={() => setCurrentPage('navigation')} />
          </div>
        )}
      </>
    </UserProvider>
  );
}

export default App;