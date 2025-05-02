import React, { useState, ChangeEvent } from 'react';
import InputField from '../../class2/a01029079/components/input';
import Button from '../../class2/a01029079/components/button';

import './Styles/TravelRequestForm.css'

const TravelRequestForm: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (): void => {
    console.log('Travel Request:', { destination, startDate, endDate, purpose });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setter(e.target.value);
    };

  return (
    <div className="p-4">
      <div className="class-container">
      <h1 className="class-title">Class 4</h1>
      <p className="class-description">Advanced React Patterns.</p>
      <a href="../../../../../src/class3/a01029079/public/menu2.html" className="class-button-link">
        Go to Menu
      </a>
    </div>
      <h1 className="text-2xl font-bold mb-4">Travel Request Form</h1>
      <InputField
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={handleInputChange(setDestination)}
      />
      <InputField
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={handleInputChange(setStartDate)}
      />
      <InputField
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={handleInputChange(setEndDate)}
      />
      <textarea
        placeholder="Purpose"
        value={purpose}
        onChange={handleInputChange(setPurpose)}
        className="p-2 border rounded w-full"
      />
      <Button text="Submit"  onClick={handleSubmit} />
    </div>
  );
};

export default TravelRequestForm;
