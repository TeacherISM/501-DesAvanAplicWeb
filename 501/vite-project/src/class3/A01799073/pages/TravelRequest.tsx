import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';


type State = {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
};

type Action = {
  type: 'UPDATE_FIELD';
  field: keyof State;
  value: string;
};

const initialState: State = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (field: keyof State, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    const { destination, startDate, endDate, purpose } = state;
    
    if (!destination || !startDate || !endDate || !purpose) {
      alert('Por favor, llena todos los campos antes de continuar.');
      return;
    }
    
    console.log('Travel Request:', state);
    navigate('/home'); 
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('destination', e.target.value)}
      />
      <input
        type="date"
        value={state.startDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('startDate', e.target.value)}
      />
      <input
        type="date"
        value={state.endDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('endDate', e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('purpose', e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelRequestForm;