import ReactDOM from 'react-dom/client';
import LoginPage from './LoginPage'; // Import your LoginPage component

const loginRoot = document.getElementById('login-root');

if (loginRoot) {
  const root = ReactDOM.createRoot(loginRoot);
  root.render(<LoginPage />);
} else {
  console.error('Could not find root element with id "login-root"');
}