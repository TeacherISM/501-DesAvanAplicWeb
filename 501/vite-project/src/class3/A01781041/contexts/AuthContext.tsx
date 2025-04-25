// src/class3/A01781041/contexts/AuthContext.tsx
import React, { createContext, useReducer, useContext } from 'react';

// Define the state interface
interface AuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
  } | null;
  loading: boolean;
}

// Define the action types
type AuthAction = 
  | { type: 'LOGIN'; payload: { username: string } }
  | { type: 'LOGOUT' }
  | { type: 'LOADING_START' }
  | { type: 'LOADING_END' };

// Define the context interface
interface AuthContextType {
  state: AuthState;
  login: (username: string) => void;
  logout: () => void;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false
};

// Create the reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: { username: action.payload.username },
        loading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false
      };
    case 'LOADING_START':
      return {
        ...state,
        loading: true
      };
    case 'LOADING_END':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  // Actions
  const login = (username: string) => {
    dispatch({ type: 'LOADING_START' });
    // Simulate API call
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { username } });
    }, 1000);
  };
  
  const logout = () => {
    dispatch({ type: 'LOADING_START' });
    // Simulate API call
    setTimeout(() => {
      dispatch({ type: 'LOGOUT' });
    }, 500);
  };
  
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};