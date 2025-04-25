import React, { useReducer } from "react";
import "./travel.css"

interface State {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

interface Action {
  type: string;
  field: keyof State;
  value: string;
}

const initialState: State = {
  destination: "",
  startDate: "",
  endDate: "",
  purpose: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof State, value: string): void => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handleSubmit = (): void => {
    console.log("Travel Request:", state);
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      {/** Input para destino */}
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("destination", e.target.value)
        }
      />
      {/** Input para fecha de inicio */}
      <input
        type="date"
        value={state.startDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("startDate", e.target.value)
        }
      />
      {/** Input para fecha de fin */}
      <input
        type="date"
        value={state.endDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("endDate", e.target.value)
        }
      />
      {/** Textarea para propósito */}
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange("purpose", e.target.value)
        }
      />
      {/** Botón para enviar */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelRequestForm;

