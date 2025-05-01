import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define user roles
export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
  GUEST = 'guest'
}

// Define permissions for each role
export const RolePermissions = {
  [UserRole.ADMIN]: ['view', 'edit', 'delete', 'approve', 'create', 'manage_users'],
  [UserRole.MANAGER]: ['view', 'edit', 'approve', 'create'],
  [UserRole.EMPLOYEE]: ['view', 'create'],
  [UserRole.GUEST]: ['view']
};

// Define user state
interface UserState {
  isAuthenticated: boolean;
  username: string;
  role: UserRole;
  permissions: string[];
}

// Define initial state
const initialState: UserState = {
  isAuthenticated: false,
  username: '',
  role: UserRole.GUEST,
  permissions: RolePermissions[UserRole.GUEST]
};

// Define action types
type UserAction = 
  | { type: 'LOGIN', payload: { username: string, role: UserRole } }
  | { type: 'LOGOUT' };

// Create reducer function
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        username: action.payload.username,
        role: action.payload.role,
        permissions: RolePermissions[action.payload.role]
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

// Create context type
interface UserContextType {
  state: UserState;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Login action
  const login = (username: string, role: UserRole) => {
    dispatch({ type: 'LOGIN', payload: { username, role } });
  };

  // Logout action
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Permission check helper
  const hasPermission = (permission: string): boolean => {
    return state.permissions.includes(permission);
  };

  return (
    <UserContext.Provider value={{ state, login, logout, hasPermission }}>
      {children}
    </UserContext.Provider>
  );
};

// Create hook to use the user context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};