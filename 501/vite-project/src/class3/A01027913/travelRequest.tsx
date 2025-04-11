import React, { useReducer, ChangeEvent } from 'react';

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

  const handleChange = (field: keyof State, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleInputChange = (field: keyof State) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(field, e.target.value);
  };

  const handleSubmit = () => {
    console.log('Travel Request:', state);
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={handleInputChange('destination')}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={handleInputChange('startDate')}
      />
      <input
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={handleInputChange('endDate')}
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={handleInputChange('purpose')}
      />
      <button onClick={handleSubmit}>Submit</button>
      <a href="./Menu.html">Menu</a>
    </div>
  );
};

export default TravelRequestForm;
