import React, { useReducer, useState } from 'react';
import Button from "../../class2/A01784399/components/Button";

// Define the types for the state and actions
type State = { count: number };
type Action = { type: 'INCREMENT' | 'DECREMENT' | 'RESET' };

// Initial state for the counter
const initialState: State = { count: 0 };

// Reducer function to handle actions
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

// StatePage component
const StatePage: React.FC<{ GoBack: () => void }> = ({ GoBack }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [message, setMessage] = useState('Click a button to begin');

    // Handle the action based on the button clicked
    const handleAction = (action: Action) => {
        dispatch(action);
        switch (action.type) {
            case 'INCREMENT':
                setMessage('You increased the count!');
                break;
            case 'DECREMENT':
                setMessage('You decreased the count!');
                break;
            case 'RESET':
                setMessage('Counter has been reset');
                break;
        }
    };

    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
                color: 'white', // Make text visible on dark backgrounds
            }}
        >
            <h2>Count: {state.count}</h2>
            <p>{message}</p>

            <div style={{ margin: '20px' }}>
                <button onClick={() => handleAction({ type: 'INCREMENT' })}>ADD</button>
                <button onClick={() => handleAction({ type: 'DECREMENT' })}>SUBTRACT</button>
                <button onClick={() => handleAction({ type: 'RESET' })}>RESET</button>
            </div>

            <Button label="Back" onClick={GoBack} />
        </div>
    );
};

export default StatePage;
