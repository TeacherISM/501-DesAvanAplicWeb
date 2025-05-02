import Menu from "./menuRole";
import Dashboard from "./dashboard";
import { UserProvider } from './userContext';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('class6')!);
root.render(
  <UserProvider>
  <Menu />
  <Dashboard />
</UserProvider>
);
