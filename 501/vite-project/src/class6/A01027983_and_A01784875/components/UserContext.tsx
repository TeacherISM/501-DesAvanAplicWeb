import React, { createContext, useState } from 'react';

type UserType = {
  role: 'employee' | 'manager' | 'admin';
};

type UserContextType = {
  user: UserType;
  login: (role: UserType['role']) => void;
};

export const UserContext = createContext<UserContextType>({
  user: { role: 'employee' },
  login: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({ role: 'employee' }); // Default role: employee

  const login = (role: UserType['role']) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
