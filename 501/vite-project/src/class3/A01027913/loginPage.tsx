import { useState, useEffect } from "react";
import FieldInput from "../../class2/A01027913/inputField";
import Boton from "../../class2/A01027913/boton";

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            if (username === 'test' && password === '1234') {
                console.log('Login successful');
            } else {
                setError('Invalid username or password');
            }
            setLoading(false);
        }, 1000);
    };


    useEffect(() => {
        setError('');
    }, [username, password]);

    useEffect(() => {
        console.log('Login component mounted');
    }, []);

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <FieldInput
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <FieldInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Boton
                label={loading ? 'Loading...' : 'Submit'}
                onClick={handleSubmit}
            />
        </div>
    );
};

export default LoginPage;
