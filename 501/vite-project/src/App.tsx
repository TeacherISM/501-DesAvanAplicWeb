import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Button from './class2/a01783060/Button';
import Login from './class2/a01783060/Login';
import TravelRequestForm from './class3/a01783060/TravelRequestForm';

type View = 'home' | 'menu' | 'login' | 'travel';

function App() {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const htmlView = document.documentElement.getAttribute('data-view') as View;
    if (htmlView === 'login' || htmlView === 'travel' || htmlView === 'menu') {
      setView(htmlView);
    }
  }, []);

  if (view === 'home') {
    return (
      <div>
        <h1>Milestone 1</h1>
        <Button label="Ir al Menú" onClick={() => setView('menu')} />
      </div>
    );
  }

  if (view === 'menu') {
    return (
      <div>
        <h1>Menú Principal</h1>
        <Button label="Ir a Login" onClick={() => window.location.href = '/public/A01783060/login.html'} />
        <Button label="Ir a Travel Request" onClick={() => window.location.href = '/public/A01783060/travel.html'} />
      </div>
    );
  }

  if (view === 'login') {
    return (
      <Login onBack={() => window.location.href = '/public/A01783060/menu.html'} />
    );
  }

  if (view === 'travel') {
    return (
      <TravelRequestForm onBack={() => window.location.href = '/public/A01783060/menu.html'} />
    );
  }

  return null;
}

export default App;
