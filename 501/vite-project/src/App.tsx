import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas de cada clase
import Welcome from './pages/Welcome';
import VitePage from './class1/A01799073/pages/VitePage';
import Login from './class2/A01799073/pages/Login';
import Home from './class2/A01799073/pages/Home';
import Counter from './class3/A01799073/components/CounterComponent';
import TravelRequest from './class3/A01799073/pages/TravelRequest';
import LoginPage from './class3/A01799073/pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vite" element={<VitePage />} />
        <Route path="/login" element={<Login onLogin={() => console.log('Usuario autenticado')} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/travel" element={<TravelRequest />} />
        <Route path="/login-clase3" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
