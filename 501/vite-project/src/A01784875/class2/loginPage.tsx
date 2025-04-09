import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const { username, password } = formData;

      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        setError('');
      } else {
        setError('Invalid username or password');
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className='Bar'>
        <h1>Valentina Gonzalez A01784875</h1>
      </div>
      <div className='LoginForm'>
        <h2 className='LoginH2'>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='LoginFields'>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;