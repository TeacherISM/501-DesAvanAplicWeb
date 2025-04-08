import React, { useReducer } from 'react';
import { Button } from '../../class2/A01784217/class2'; 

const initialState = { count: 0 };

type ActionType = 'increase' | 'decrease' | 'reset';

const counterReducer = (state: typeof initialState, action: { type: ActionType }): typeof initialState => {
    const actions: Record<ActionType, () => typeof initialState> = {
        increase: () => ({ count: state.count + 1 }),
        decrease: () => ({ count: state.count - 1 }),
        reset: () => ({ count: 0 }),
    };

    return actions[action.type]();
};

const Class3: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Counter</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increase' })} style={{ margin: '5px' }}>
                increase
            </button>
            <button onClick={() => dispatch({ type: 'decrease' })} style={{ margin: '5px' }}>
                decrease
            </button>
            <button onClick={() => dispatch({ type: 'reset' })} style={{ margin: '5px' }}>
                Reset
            </button>
            <div style={{ marginTop: '20px' }}>
                <Button label="Return to Home Page" onClick={onBack} />
            </div>
        </div>
    );
};

export default Class3;