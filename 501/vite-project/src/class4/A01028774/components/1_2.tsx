import React, { useState, ChangeEvent } from 'react';
import InputField from "../../../class2/A01028033/components/InputField.tsx";
import Button from "../../../class2/A01028033/components/Button.tsx";

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    console.log('Expense:', { amount, category, description });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <div className="p-4">
      <div>
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <p>
        Cantidad: 
        <InputField
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleInputChange(setAmount)}
      />
      </p>
      </div>
      <div>
      <p>
        Categoría:
      <InputField
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleInputChange(setCategory)}
      />
      </p>
      </div>
      <div>
      <p>
        Descripción del gasto:
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleInputChange(setDescription)}
        className="p-2 border rounded w-full"
      />
      </p>
      </div>
        
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
