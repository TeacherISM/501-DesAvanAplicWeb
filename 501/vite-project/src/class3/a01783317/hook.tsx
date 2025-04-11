import React, { useReducer } from 'react';
import './useReducer.css';

// Define our state type
interface CounterState {
  count: number;
  lastAction: string;
}

// Define our action types
type CounterAction = 
  | { type: 'increment'; payload?: number }
  | { type: 'decrement'; payload?: number }
  | { type: 'reset' };

// Initial state
const initialState: CounterState = {
  count: 0,
  lastAction: 'none'
};

// Reducer function
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + (action.payload || 1),
        lastAction: `Incremented by ${action.payload || 1}`
      };
    case 'decrement':
      return {
        count: state.count - (action.payload || 1),
        lastAction: `Decremented by ${action.payload || 1}`
      };
    case 'reset':
      return {
        count: 0,
        lastAction: 'Reset to zero'
      };
    default:
      return state;
  }
};

const UseReducerDemo: React.FC = () => {
  // Initialize useReducer with our reducer and initial state
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  // Custom increment value state
  const [incrementValue, setIncrementValue] = React.useState(1);
  
  return (
    <div className="reducer-page">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="reducer-container">
        <h2>useReducer Example</h2>
        
        <div className="counter-display">
          <p className="count-value">{state.count}</p>
          <p className="last-action">Last action: {state.lastAction}</p>
        </div>
        
        <div className="action-controls">
          <div className="value-control">
            <label htmlFor="increment-value">Increment/Decrement By:</label>
            <input
              id="increment-value" 
              type="number" 
              value={incrementValue} 
              onChange={(e) => setIncrementValue(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
          </div>
          
          <div className="button-group">
            <button 
              onClick={() => dispatch({ type: 'decrement', payload: incrementValue })}
              className="action-button decrement"
            >
              Decrement
            </button>
            
            <button 
              onClick={() => dispatch({ type: 'reset' })}
              className="action-button reset"
            >
              Reset
            </button>
            
            <button 
              onClick={() => dispatch({ type: 'increment', payload: incrementValue })}
              className="action-button increment"
            >
              Increment
            </button>
          </div>
        </div>
        
        <div className="info-section">
          <h3>About useReducer</h3>
          <p>
            The <code>useReducer</code> hook is useful for managing complex state logic. It's an alternative
            to <code>useState</code> that gives you more control over state transitions through actions.
          </p>
          <p>
            The pattern is similar to Redux but built into React. It takes a reducer function and initial state,
            and returns the current state paired with a dispatch method.
          </p>
        </div>
        
        <a href="/landing.html" className="return-link">
          <button className="return-button">Return to Home</button>
        </a>
      </div>
    </div>
  );
};

export default UseReducerDemo;