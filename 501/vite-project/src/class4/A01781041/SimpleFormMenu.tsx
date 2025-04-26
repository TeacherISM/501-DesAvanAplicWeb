import React, { useState } from 'react';

interface TravelFormData {
  destination: string;
  departureDate: string;
  returnDate: string;
  purpose: string;
}

interface ExpenseFormData {
  amount: string;
  date: string;
  category: string;
  description: string;
}

enum FormType {
  TRAVEL = 'travel',
  EXPENSE = 'expense',
  NONE = 'none'
}

const SimpleFormMenu: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.NONE);
  const [submitted, setSubmitted] = useState(false);
  
  // Travel form state
  const [travelData, setTravelData] = useState<TravelFormData>({
    destination: '',
    departureDate: '',
    returnDate: '',
    purpose: ''
  });
  
  // Expense form state
  const [expenseData, setExpenseData] = useState<ExpenseFormData>({
    amount: '',
    date: '',
    category: 'meals',
    description: ''
  });
  
  const handleTravelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTravelData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleExpenseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpenseData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleTravelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Travel form submitted:', travelData);
    setSubmitted(true);
  };
  
  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Expense form submitted:', expenseData);
    setSubmitted(true);
  };
  
  const resetForms = () => {
    setActiveForm(FormType.NONE);
    setSubmitted(false);
    setTravelData({
      destination: '',
      departureDate: '',
      returnDate: '',
      purpose: ''
    });
    setExpenseData({
      amount: '',
      date: '',
      category: 'meals',
      description: ''
    });
  };
  
  const renderTravelForm = () => (
    <form onSubmit={handleTravelSubmit} className="form">
      <h2>Travel Request Form</h2>
      
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={travelData.destination}
          onChange={handleTravelChange}
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={travelData.departureDate}
            onChange={handleTravelChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={travelData.returnDate}
            onChange={handleTravelChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="purpose">Purpose of Travel</label>
        <textarea
          id="purpose"
          name="purpose"
          value={travelData.purpose}
          onChange={handleTravelChange}
          rows={4}
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-button">Submit Request</button>
        <button type="button" className="back-button" onClick={resetForms}>
          Back to Menu
        </button>
      </div>
    </form>
  );
  
  const renderExpenseForm = () => (
    <form onSubmit={handleExpenseSubmit} className="form">
      <h2>Expense Submission Form</h2>
      
      <div className="form-group">
        <label htmlFor="amount">Amount ($)</label>
        <input
          type="number"
          step="0.01"
          id="amount"
          name="amount"
          value={expenseData.amount}
          onChange={handleExpenseChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="date">Date of Expense</label>
        <input
          type="date"
          id="date"
          name="date"
          value={expenseData.date}
          onChange={handleExpenseChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expenseData.category}
          onChange={handleExpenseChange}
        >
          <option value="meals">Meals & Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="accommodation">Accommodation</option>
          <option value="supplies">Office Supplies</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={expenseData.description}
          onChange={handleExpenseChange}
          rows={4}
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-button">Submit Expense</button>
        <button type="button" className="back-button" onClick={resetForms}>
          Back to Menu
        </button>
      </div>
    </form>
  );
  
  const renderSuccessMessage = () => (
    <div className="success-message">
      <h2>Form Submitted Successfully!</h2>
      <p>Your form has been submitted. Thank you!</p>
      <button onClick={resetForms} className="action-button">
        Back to Form Selection
      </button>
    </div>
  );
  
  const renderFormSelection = () => (
    <div className="form-selection">
      <h2>Select a Form</h2>
      <p>Please choose the type of form you need to complete:</p>
      
      <div className="form-buttons">
        <button 
          onClick={() => setActiveForm(FormType.TRAVEL)}
          className="form-select-button"
        >
          Travel Request Form
        </button>
        
        <button 
          onClick={() => setActiveForm(FormType.EXPENSE)}
          className="form-select-button"
        >
          Expense Submission Form
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>
      
      <div className="container">
        {submitted ? (
          renderSuccessMessage()
        ) : activeForm === FormType.NONE ? (
          renderFormSelection()
        ) : activeForm === FormType.TRAVEL ? (
          renderTravelForm()
        ) : (
          renderExpenseForm()
        )}
      </div>
      
      <style jsx>{`
        .nav-bar {
          padding: 15px;
          background-color: #f8f8f8;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }

        .back-link {
          color: #3498db;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
        }

        .back-link:hover {
          text-decoration: underline;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          text-align: center;
        }
        
        p {
          text-align: center;
          color: #7f8c8d;
          margin-bottom: 25px;
        }
        
        .form-selection {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .form-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .form-select-button {
          padding: 15px 30px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          min-width: 200px;
        }
        
        .form-select-button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }
        
        .form {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
        
        .form-actions {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }
        
        .submit-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }
        
        .submit-button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }
        
        .back-button {
          background-color: #ecf0f1;
          color: #34495e;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }
        
        .back-button:hover {
          background-color: #dfe6e9;
          transform: translateY(-2px);
        }
        
        .success-message {
          background-color: #d4f5e8;
          border: 1px solid #2ecc71;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .success-message h2 {
          color: #27ae60;
          margin-top: 0;
        }
        
        .action-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s;
        }
        
        .action-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default SimpleFormMenu;