import React, { useState, ChangeEvent } from 'react';
import InputField from '../../class2/A01028418/components/InputField';
import Button from '../../class2/A01028418/components/Button';
import './styles/expenseform.css'

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (): void => {
    console.log('Expense:', { amount, category, description });
  };

  return (
    <>
      <div>
        <a href="/">
          <button>Página Inicial</button>
        </a>
        <a href="/public/A01028517/Milestone2/Milestone2_Menu.html">
          <button>Menú Milestone 2</button>
        </a>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
        <InputField
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default ExpenseForm;
