import { useReducer } from "react";
import "./staircase.css";

const MAX_FLOOR = 10;
const MIN_FLOOR = 0;

type State = {
  floor: number;
};

type Action = { type: "UP" } | { type: "DOWN" } | { type: "RESET" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UP":
      return { floor: Math.min(state.floor + 1, MAX_FLOOR) };
    case "DOWN":
      return { floor: Math.max(state.floor - 1, MIN_FLOOR) };
    case "RESET":
      return { floor: 0 };
    default:
      return state;
  }
};

const Staircase = () => {
  const [state, dispatch] = useReducer(reducer, { floor: 0 });

  return (
    <div className="container">
      <a href="http://localhost:5173/index.html" className="back-button">
        Back Home
      </a>
      <h1>Staircase Elevator</h1>
      <div className="controls">
        <button
          onClick={() => dispatch({ type: "UP" })}
          disabled={state.floor === MAX_FLOOR}
        >
          ⬆️ Go Up
        </button>
        <button
          onClick={() => dispatch({ type: "DOWN" })}
          disabled={state.floor === MIN_FLOOR}
        >
          ⬇️ Go Down
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>🔁 Reset</button>
      </div>
      <div className="staircase">
        {[...Array(MAX_FLOOR + 1)].map((_, i) => {
          const floorNumber = MAX_FLOOR - i;
          const isCurrent = state.floor === floorNumber;
          return (
            <div
              key={floorNumber}
              className={`floor ${isCurrent ? "current" : ""}`}
            >
              Floor {floorNumber} {isCurrent ? "🧍" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staircase;
