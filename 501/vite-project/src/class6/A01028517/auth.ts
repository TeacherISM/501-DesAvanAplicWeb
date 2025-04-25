// auth.ts
export type Role = 'admin' | 'user';

interface User {
  username: string;
  password: string;
  role: Role;
}

const users: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

let currentUser: User | null = null;

export const login = (username: string, password: string): User | null => {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = user;
    return user;
  }
  return null;
};

export const getCurrentUser = (): User | null => {
  return currentUser;
};
