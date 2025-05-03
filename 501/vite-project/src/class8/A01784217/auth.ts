/**
 * Author: Nicole Dávila Hernández 
 * 
 * Description: Updated file from last Milestone to include mock navigation for testing
 */

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
  currentUser = user || null;
  return currentUser;
};

export const getCurrentUser = (): User | null => {
  return currentUser;
};

// For testing purposes
export const resetAuth = () => {
  currentUser = null;
};