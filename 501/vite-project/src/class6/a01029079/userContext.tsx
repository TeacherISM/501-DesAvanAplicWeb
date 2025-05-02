import { createContext, useState, ReactNode, FC } from 'react';

export interface User {
  role: 'employee' | 'manager' | 'admin';
}

interface UserContextType {
  user: User;
  login: (role: User['role']) => void;
}

export const UserContext = createContext<UserContextType>({
  user: { role: 'employee' },
  login: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: 'employee' });

  const login = (role: User['role']) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
