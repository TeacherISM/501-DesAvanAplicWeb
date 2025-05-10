import React, { useState, ChangeEvent } from 'react';
import InputField from '../../class2/A01784568/InputField';
import Button from '../../class2/A01784568/Button';

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    console.log('Expense:', { amount, category, description });
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <div style={{ padding: '16px' }}>
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '16px',
        }}
      >
        Expense Form
      </h1>

      <div style={{ marginBottom: '12px' }}>
        <InputField
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleChange(setAmount)}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <InputField
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleChange(setCategory)}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleChange(setDescription)}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            height: '100px',
            display: 'block',
          }}
        />
      </div>

      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
