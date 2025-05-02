import React, { useState } from 'react';
import InputField from './inputField';
import Button from './button';
import { useUser } from '../../class4/A01663909/UserContext';

// Updated Page type to include all pages
type Page = 'home' | 'login' | 'blank' | 'navigation' | 'form' | 'expense' | 'dashboard';

// Add props interface to receive setCurrentPage function
interface LoginProps {
  setCurrentPage?: React.Dispatch<React.SetStateAction<Page>>;
}

const Login: React.FC<LoginProps> = ({ setCurrentPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { login } = useUser();

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Simple validation - accept any user with password "password"
    if (password === 'password') {
      // Determine role based on username (just for demo)
      let role = 'employee';
      
      // Check username for role keywords
      if (username.includes('manager')) {
        role = 'manager';
      } else if (username.includes('admin')) {
        role = 'admin';
      }

      console.log(`Logging in with role: ${role}`);

      // Use the login function from context
      login(role as 'employee' | 'manager' | 'admin', { username });

      // Navigate to the dashboard page on successful login
      if (setCurrentPage) {
        setCurrentPage('dashboard');
      } else {
        // If setCurrentPage is not provided, just log success
        console.log('Login successful, but navigation not available');
        alert('Login successful!');
      }
    } else {
      // Show an error message for invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '60px auto',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#fff5f2',
        boxShadow: '0 8px 20px rgba(255, 111, 97, 0.15)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#ff6f61', marginBottom: '20px' }}>Login</h1>
      
      {/* Display error message if login fails */}
      {error && (
        <p style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>
          {error}
        </p>
      )}
      
      <InputField
        type="text"
        placeholder="Username (include 'manager' or 'admin' for those roles)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password (always use 'password')"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;