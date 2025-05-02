/** @jsxImportSource react */
import { createContext, useState, ReactNode } from "react";

type Role = "employee" | "manager" | "admin";

interface User {
  role: Role;
}

interface ContextProps {
  user: User;
  login: (role: Role) => void;
}

export const UserContext = createContext<ContextProps>({
  user: { role: "employee" },
  login: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ role: "employee" });

  const login = (role: Role) => setUser({ role });

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
