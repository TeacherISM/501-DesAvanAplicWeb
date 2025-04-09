import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Users List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(({ id, name, email }) => (
            <li key={id} style={{ marginBottom: '10px' }}>
              <strong>{name}</strong> - {email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;