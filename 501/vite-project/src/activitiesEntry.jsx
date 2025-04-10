import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './class2/a01783060/Login';
import TravelRequestForm from './class3/a01783060/TravelRequestForm';

export function mountComponent(componentName) {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  const Component = componentName === 'login' ? <Login /> : <TravelRequestForm />;

  ReactDOM.createRoot(rootElement).render(
    <div>
      <h2>Actividad: {componentName === 'login' ? 'Login' : 'Travel Form'}</h2>
      {Component}
    </div>
  );
}
