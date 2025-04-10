import React, { useReducer, useState } from 'react';

interface Props {
  onBack: () => void;
}

const TravelRequestForm: React.FC<Props> = ({ onBack }) => {
  const initialState = {
    destination: '',
    startDate: '',
    endDate: '',
    purpose: '',
  };

  const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    const { destination, startDate, endDate, purpose } = state;

    if (!destination || !startDate || !endDate || !purpose) {
      setMessage('Please fill in all fields.');
      setIsError(true);
    } else {
      console.log('Travel Request:', state);
      setMessage('Travel request form sent!');
      setIsError(false);
    }
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange('destination', e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={(e) => handleChange('startDate', e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={(e) => handleChange('endDate', e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange('purpose', e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onBack} style={{ marginLeft: '10px' }}>
        Back
      </button>

      {message && (
        <p style={{ color: isError ? 'red' : 'green', marginTop: '10px' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default TravelRequestForm;
