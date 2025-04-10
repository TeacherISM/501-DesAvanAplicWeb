import React, { useReducer } from 'react';

interface CounterState {
  count: number;
  history: number[];
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'CLEAR_HISTORY' };

const initialState: CounterState = {
  count: 0,
  history: []
};

function counterReducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case 'INCREMENT': {
      const newCount = state.count + 1;
      return {
        count: newCount,
        history: [...state.history, newCount]
      };
    }
    case 'DECREMENT': {
      const newCount = state.count - 1;
      return {
        count: newCount,
        history: [...state.history, newCount]
      };
    }
    case 'RESET': {
      return {
        count: 0,
        history: [...state.history, 0]
      };
    }
    case 'CLEAR_HISTORY': {
      return { ...state, history: [] };
    }
    default:
      throw new Error('Unknown action type');
  }
}

const AdvancedCounter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Contador con Historial</h2>
      <p className="counter-value">Count: {state.count}</p>
      <div className="counter-buttons">
        <button className="btn" onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button className="btn" onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button className="btn" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button className="btn" onClick={() => dispatch({ type: 'CLEAR_HISTORY' })}>Clear History</button>
        <a href="../../../../../src/class3/a01029079/public/menu.html" className='btn'> Return </a>
      </div>
      <h3 className="history-title">Historial</h3>
      {state.history.length === 0 ? (
        <p>No hay historial.</p>
      ) : (
        <ul className="history-list">
          {state.history.map((val, index) => (
            <li key={index} className="history-item">#{index + 1}: {val}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedCounter;