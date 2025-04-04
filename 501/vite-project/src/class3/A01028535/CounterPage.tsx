import React, { useReducer } from 'react';

// Definir el tipo de estado
interface State {
  count: number;
}

// Definir los tipos de las acciones
type Action = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Reducer para manejar las acciones del contador
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error('Tipo de acción desconocido');
  }
};

const CounterPage: React.FC = () => {
  // Usar useReducer para manejar el estado
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Contador</h2>
      <p>Cuenta: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Sumar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Restar</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default CounterPage;
