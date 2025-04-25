import React, { useState } from 'react';
import InputField from '../../class2/A01027920/InputField';
import Button from '../../class2/A01027920/Button';

const TravelRequestForm: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');

  const handleSubmit = () => {
    console.log('Travel Request:', { destination, startDate, endDate, purpose });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>
      <InputField
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={purpose}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPurpose(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default TravelRequestForm;
