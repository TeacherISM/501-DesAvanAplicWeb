import React, { useState } from 'react';

interface ExpenseFormProps {
  onSubmit: (formData: ExpenseData) => void;
}

export interface ExpenseData {
  expenseType: string;
  amount: string;
  date: string;
  vendor: string;
  category: string;
  paymentMethod: string;
  receiptAvailable: boolean;
  description: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ExpenseData>({
    expenseType: 'business',
    amount: '',
    date: '',
    vendor: '',
    category: 'meals',
    paymentMethod: 'credit',
    receiptAvailable: true,
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prevData => ({
        ...prevData,
        [name]: target.checked
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="expense-form">
      <h2>Expense Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="expenseType">Expense Type</label>
          <select
            id="expenseType"
            name="expenseType"
            value={formData.expenseType}
            onChange={handleChange}
          >
            <option value="business">Business</option>
            <option value="personal">Personal</option>
            <option value="travel">Travel</option>
            <option value="client">Client Entertainment</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="number"
              step="0.01"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Expense</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="vendor">Vendor/Merchant</label>
          <input
            type="text"
            id="vendor"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="meals">Meals & Entertainment</option>
              <option value="transportation">Transportation</option>
              <option value="accommodation">Accommodation</option>
              <option value="supplies">Office Supplies</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit">Company Credit Card</option>
              <option value="personal">Personal Card (Reimbursement)</option>
              <option value="cash">Cash</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="receiptAvailable"
            name="receiptAvailable"
            checked={formData.receiptAvailable}
            onChange={handleChange}
          />
          <label htmlFor="receiptAvailable">Receipt Available</label>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">Submit Expense</button>
          <button type="reset" className="reset-button">Reset</button>
        </div>
      </form>

      <style jsx>{`
        .expense-form {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
          width: 100%;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 10px;
          }
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #34495e;
        }

        input, select, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .checkbox-group input {
          width: auto;
          margin: 0;
        }

        .checkbox-group label {
          margin-bottom: 0;
        }

        .form-actions {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }

        button {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .submit-button {
          background-color: #3498db;
          color: white;
        }

        .submit-button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }

        .reset-button {
          background-color: #ecf0f1;
          color: #34495e;
        }

        .reset-button:hover {
          background-color: #dfe6e9;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ExpenseForm;