// src/A01781041/Clase3/LoginWithReducer.tsx
import React, { useReducer, useEffect } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

// Define the state type for TypeScript
interface LoginState {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
  formError: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

// Define the action types
type LoginAction = 
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_USERNAME_ERROR'; payload: string }
  | { type: 'SET_PASSWORD_ERROR'; payload: string }
  | { type: 'SET_FORM_ERROR'; payload: string }
  | { type: 'START_LOGIN' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'VALIDATE_FORM' };

// Define the initial state
const initialState: LoginState = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  formError: '',
  isLoading: false,
  isLoggedIn: false
};

// Create the reducer function
const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { 
        ...state, 
        username: action.payload,
        usernameError: ''
      };
    
    case 'SET_PASSWORD':
      return { 
        ...state, 
        password: action.payload,
        passwordError: ''
      };
    
    case 'SET_USERNAME_ERROR':
      return { 
        ...state, 
        usernameError: action.payload 
      };
    
    case 'SET_PASSWORD_ERROR':
      return { 
        ...state, 
        passwordError: action.payload 
      };
    
    case 'SET_FORM_ERROR':
      return { 
        ...state, 
        formError: action.payload 
      };
    
    case 'START_LOGIN':
      return { 
        ...state, 
        isLoading: true,
        formError: ''
      };
    
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        isLoading: false,
        isLoggedIn: true,
        formError: ''
      };
    
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        isLoading: false,
        formError: action.payload 
      };
    
    case 'LOGOUT':
      return { 
        ...initialState 
      };
    
    case 'VALIDATE_FORM': {
      const newState = { ...state };
      
      // Validate username
      if (!state.username.trim()) {
        newState.usernameError = 'Username is required';
      } else if (state.username.length < 3) {
        newState.usernameError = 'Username must be at least 3 characters';
      } else {
        newState.usernameError = '';
      }
      
      // Validate password
      if (!state.password) {
        newState.passwordError = 'Password is required';
      } else if (state.password.length < 6) {
        newState.passwordError = 'Password must be at least 6 characters';
      } else {
        newState.passwordError = '';
      }
      
      return newState;
    }
    
    default:
      return state;
  }
};

const LoginWithReducer: React.FC = () => {
  // Use the reducer
  const [state, dispatch] = useReducer(loginReducer, initialState);
  
  // Destructure the state for easier access
  const { 
    username, 
    password, 
    usernameError,
    passwordError,
    formError,
    isLoading, 
    isLoggedIn 
  } = state;
  
  // Handle input changes with dispatch
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_USERNAME', payload: e.target.value });
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };
  
  // Form validation before submission
  const validateForm = (): boolean => {
    dispatch({ type: 'VALIDATE_FORM' });
    
    // Check if there are any validation errors
    return !(
      !username.trim() || 
      username.length < 3 || 
      !password || 
      password.length < 6
    );
  };
  
  // Handle form submission
  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    
    dispatch({ type: 'START_LOGIN' });
    
    // Simulate a login request with setTimeout
    setTimeout(() => {
      // For demo purposes, accept specific credentials or any valid format
      if ((username === 'admin' && password === 'password') || 
          (username.length >= 3 && password.length >= 6)) {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ 
          type: 'LOGIN_FAILURE', 
          payload: 'Invalid username or password' 
        });
      }
    }, 1500);
  };
  
  // Handle logout
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          {isLoggedIn ? 'Welcome!' : 'Login with useReducer'}
        </h2>
        
        {isLoggedIn ? (
          <div className="success-content">
            <p className="welcome-message">
              Hello, <strong>{username}</strong>! You have successfully logged in.
            </p>
            <p className="welcome-subtitle">
              This login form demonstrates the use of the useReducer hook for form state management.
            </p>
            <Button label="Logout" onClick={handleLogout} type="secondary" />
          </div>
        ) : (
          <div className="form-content">
            {formError && (
              <div className="form-error">
                {formError}
              </div>
            )}
            
            <InputField
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              label="Username"
              error={usernameError}
            />
            
            <InputField
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              error={passwordError}
            />
            
            <div className="button-container">
              <Button 
                label={isLoading ? "Logging in..." : "Login"} 
                onClick={handleSubmit}
                disabled={isLoading}
              />
            </div>
            
            <div className="login-info">
              <p>Demo credentials: admin / password</p>
              <p>Or use any username (min 3 chars) and password (min 6 chars)</p>
            </div>
          </div>
        )}
        
        <div className="reducer-explanation">
          <h3>useReducer Implementation</h3>
          <p>
            This form uses React's <code>useReducer</code> hook to manage form state instead of multiple 
            <code>useState</code> calls, offering several benefits:
          </p>
          <ul>
            <li>Centralized state management</li>
            <li>Predictable state updates via actions</li>
            <li>Easier handling of related state transitions</li>
            <li>Built-in form validation logic</li>
            <li>Improved code organization</li>
          </ul>
        </div>
      </div>
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
        }
        
        .login-card {
          width: 100%;
          max-width: 500px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }
        
        .login-title {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 24px;
          text-align: center;
          font-size: 24px;
        }
        
        .form-error {
          background-color: #fdeded;
          color: #e74c3c;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 16px;
          border-left: 4px solid #e74c3c;
        }
        
        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 24px;
        }
        
        .login-info {
          margin-top: 24px;
          text-align: center;
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .login-info p {
          margin: 4px 0;
        }
        
        .success-content {
          text-align: center;
          padding: 20px 0;
        }
        
        .welcome-message {
          font-size: 18px;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .welcome-subtitle {
          color: #7f8c8d;
          margin-bottom: 30px;
        }
        
        .reducer-explanation {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #ecf0f1;
        }
        
        .reducer-explanation h3 {
          color: #2c3e50;
          margin-bottom: 12px;
          font-size: 18px;
        }
        
        .reducer-explanation p {
          color: #34495e;
          line-height: 1.6;
        }
        
        .reducer-explanation code {
          background-color: #f7f9fa;
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
          margin: 0 2px;
        }
        
        .reducer-explanation ul {
          margin-top: 10px;
          padding-left: 20px;
        }
        
        .reducer-explanation li {
          margin-bottom: 8px;
          color: #34495e;
        }
      `}</style>
    </div>
  );
};

export default LoginWithReducer;