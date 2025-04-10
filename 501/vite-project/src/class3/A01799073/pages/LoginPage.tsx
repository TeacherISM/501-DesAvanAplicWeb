import { useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import InputField from '../../../class2/A01799073/components/InputFIeld';
import Button from '../../../class2/A01799073/components/Buttons';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0); 

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        navigate('/travel');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Clase 3</h1>

      <div style={{ marginBottom: '20px' }}>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
          Decrementar
        </button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
    </div>
  );
};

export default LoginPage;
