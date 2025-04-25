import React, { useState } from 'react';
import InputField from '../../class2/A01799073/components/InputFIeld';
import Button from '../../class2/A01799073/components/Buttons';

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    if (!amount || !category || !description) {
      alert('Por favor, llena todos los campos.');
      return;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <InputField
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
