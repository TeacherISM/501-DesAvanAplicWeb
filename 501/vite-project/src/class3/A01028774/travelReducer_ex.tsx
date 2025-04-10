import React, { useReducer } from 'react';

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

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof State, value: string): void => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = (): void => {
    console.log('Travel Request:', state);
    alert('Travel request submitted!');
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <div>
      <span style={{ marginRight: '8px' }}>Destino:</span> 
        <input
            type="text"
            placeholder="Destination"
            value={state.destination}
            onChange={(e) => handleChange('destination', e.target.value)}
        />
      </div>
      <div>
      <span style={{ marginRight: '8px' }}>Fecha Inicio:</span>
        <input
            type="date"
            placeholder="Start Date"
            value={state.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
        />
       </div> 
       <div>
        <span style={{ marginRight: '8px' }}>Fecha Fin:</span>
        <input
            type="date"
            placeholder="End Date"
            value={state.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
        /> 
        </div>
        <div>
        <span style={{ marginRight: '8px' }}>Propósito:</span>
            <textarea
                placeholder="Purpose"
                value={state.purpose}
                onChange={(e) => handleChange('purpose', e.target.value)}
            />
        </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelRequestForm;