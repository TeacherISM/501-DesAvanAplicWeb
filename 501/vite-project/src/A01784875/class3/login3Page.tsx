import { useReducer } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

type State = {
  username: string;
  password: string;
  error: string;
  loading: boolean;
};

type Action =
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERROR'; error: string }
  | { type: 'SET_LOADING'; loading: boolean };

const initialState: State = {
  username: '',
  password: '',
  error: '',
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, error, loading } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = () => {
    dispatch({ type: 'SET_LOADING', loading: true });
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        dispatch({ type: 'SET_ERROR', error: '' });
      } else {
        dispatch({ type: 'SET_ERROR', error: 'Invalid username or password' });
      }
      dispatch({ type: 'SET_LOADING', loading: false });
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
            value={username}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;