import React, { useReducer } from 'react';

type State = {
  count: number;
};

type Action = 
  | { type: 'increment' } 
  | { type: 'decrement' } 
  | { type: 'reset' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

const Clase3: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="clase3-container">
      <h1 className="clase3-title">Clase 3</h1>
      <p className="clase3-text"> Usando useReducer para hacer una aplicación de contador</p>

      <div className="counter-box">
        <h2 className="counter-value">Contador: {state.count}</h2>
        <div className="counter-buttons">
          <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Limpiar</button>
        </div>
      </div>

      <ul className="menu-list">
        <li>
          <a href="/src/class3/A01029143/pages/Menu.html">Menu</a>
        </li>
      </ul>
    </div>
  );
};

export default Clase3;
