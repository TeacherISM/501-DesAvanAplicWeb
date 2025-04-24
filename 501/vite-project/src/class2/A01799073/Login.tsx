import { useState } from 'react';
import InputField from './components/InputFIeld';
import Button from './components/Buttons';
import BackToMenu from '../../class3/A01799073/components/BackMenu';


interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    if (username && password) {
      onLogin();
    } else {
      alert('Por favor, rellene los campos disponibles');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="login-container">
        <h1>Login</h1>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Button label="Submit" onClick={handleSubmit} />
      </div>
      <BackToMenu/>
    </div>
  );
};

export default Login;
