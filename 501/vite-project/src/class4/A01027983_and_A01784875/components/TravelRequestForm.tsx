import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const TravelRequestForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [purpose, setPurpose] = useState('');

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
        onChange={(e) => setDestination(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <InputField
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default TravelRequestForm;