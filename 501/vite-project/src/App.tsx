import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// imports from my files
import RenderImage from './class1/A01784217/class1';
import { Button, Login } from './class2/A01784217/class2';
import Class3 from './class3/A01784217/class3';

function App() {
    const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'class3'>('home');

    const goToLogin = () => {
        setCurrentPage('login');
    };

    const goToHome = () => {
        setCurrentPage('home');
    };

    const goToClass3 = () => {
        setCurrentPage('class3');
    };

    return (
        <>
            {currentPage === 'home' && (
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
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                    <div>
                        <h5>Photo rendered by arrow function:</h5>
                        <RenderImage />
                    </div>
                    <br />
                    <div>
                        <Button label="Go to Login" onClick={goToLogin} />
                        <Button label="Go to Counter" onClick={goToClass3} />
                    </div>
                </div>
            )}
            {currentPage === 'login' && <Login onBack={goToHome} />}
            {currentPage === 'class3' && <Class3 onBack={goToHome} />}
        </>
    );
}

export default App;