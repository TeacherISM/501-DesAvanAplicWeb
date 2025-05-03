import React, { useState, ChangeEvent } from 'react';
import InputField from "../../../class2/A01028033/components/InputField.tsx";
import Button from "../../../class2/A01028033/components/Button.tsx";

const TravelRequestForm: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');

  const handleSubmit = () => {
    console.log('Travel Request:', { destination, startDate, endDate, purpose });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value); 
    };

  return (
    <div className="p-4">
    <div>
      <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>
      <p>Destino: 
      <InputField 
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={handleInputChange(setDestination)}
      />
      </p>
    </div>
    <div>
    <p>Fecha inicio:
      <InputField
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={handleInputChange(setStartDate)}
      />
    </p>
    </div>
    <div>
    <p>Fecha fin:
      <InputField
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={handleInputChange(setEndDate)}
      />
    </p>
    </div>
    <div>
    <p>Propósito:
      <textarea 
        placeholder="Purpose"
        value={purpose}
        onChange={handleInputChange(setPurpose)}
        className="p-2 border rounded w-full"
      />
    </p>
    </div>
    <div className="mt-4">
      <Button label="Submit" onClick={handleSubmit}/>
    </div>
    </div>
  );
};

export default TravelRequestForm;
