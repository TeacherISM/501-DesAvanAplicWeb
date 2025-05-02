import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('Expense:', { amount, category, description });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <InputField
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;