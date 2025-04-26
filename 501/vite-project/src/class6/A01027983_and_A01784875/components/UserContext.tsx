import React, { createContext, useState } from 'react';

export const UserContext = createContext({
    user: { role: 'employee' },
    login: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'employee' }); // Default role: employee

  const login = (role) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
