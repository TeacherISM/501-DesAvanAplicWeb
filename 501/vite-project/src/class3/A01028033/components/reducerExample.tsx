import { useReducer } from "react";

// Define the shape of our state
interface State {
  count: number;
}

// Define the types of actions we support
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// Initial state
const initialState: State = { count: 0 };

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>Counter (useReducer)</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;
