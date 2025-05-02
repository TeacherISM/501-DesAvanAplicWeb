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
  login: () => {console.log("Default log")},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({ role: 'employee' }); // Default role: employee

  const login = (role: UserType['role']) => {
    console.log("Logged in!");
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
