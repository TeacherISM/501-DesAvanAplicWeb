import React, { createContext, useState, ReactNode } from 'react';

type User = {
  role: string;
};

type UserContextType = {
  user: User;
  login: (role: string) => void;
};

const defaultUserContextValue: UserContextType = {
  user: { role: 'employee' },
  login: (role: string) => {},
};

export const UserContext = createContext<UserContextType>(defaultUserContextValue);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: 'employee' }); // Default role: employee

  const login = (role: string) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
