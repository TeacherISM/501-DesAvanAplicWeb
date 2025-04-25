import React, { createContext, useState, ReactNode, useContext } from 'react';

// Tipos
type UserRole = 'employee' | 'manager' | 'admin' | 'hr';
interface User {
  role: UserRole;
}
interface UserContextType {
  user: User;
  login: (role: UserRole) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ role: 'employee' }); // Rol por default

  const login = (role: UserRole) => setUser({ role });

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
};