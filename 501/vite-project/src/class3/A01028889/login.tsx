import { useReducer } from "react";
import InputField from "./inputField";
import Button from "./button";
import "./Styles/login.css";
import WelcomeMessage from "./welcomeMessage";

// Set up initial state
const initialState = {
  name: "",
  password: "",
  isLoggedIn: false,
};

// Reducer
function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.isLoggedIn ? (
        <WelcomeMessage name={state.name} />
      ) : (
        <div className="login-container">
          <h1>Login</h1>
          <InputField
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
          <Button label="Login" onClick={() => dispatch({ type: "LOGIN" })} />
        </div>
      )}
    </>
  );
}

export default Login;
