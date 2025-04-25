import React, { createContext, useState, ReactNode } from 'react';

interface User {
  role: string;
}

interface UserContextType {
  user: User;
  login: (role: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: 'employee' });

  const login = (role: string) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
