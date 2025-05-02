import React, { useReducer, useState } from 'react';

interface TravelRequestFormProps {
  onSuccess: () => void;
}

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

const TravelRequestForm: React.FC<TravelRequestFormProps> = ({ onSuccess }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (field: keyof State, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    const { destination, startDate, endDate, purpose } = state;
    const newErrors = [];

    if (!destination) newErrors.push('Destination is required');
    if (!startDate) newErrors.push('Start date is required');
    if (!endDate) newErrors.push('End date is required');
    if (!purpose) newErrors.push('Purpose is required');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    onSuccess();
  };

  return (
    <div>
      <h1>Travel Request Form</h1>

      {/* Mostrar errores */}
      {errors.map((err, idx) => (
        <div key={idx} style={{ color: 'red' }}>{err}</div>
      ))}

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
    </div>
  );
};

export default TravelRequestForm;
