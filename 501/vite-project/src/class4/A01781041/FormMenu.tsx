import React, { useState } from 'react';
import TravelRequestForm, { TravelRequestData } from './TravelRequestForm';
import ExpenseForm, { ExpenseData } from './ExpenseForm';

enum FormType {
  TRAVEL_REQUEST = 'travel',
  EXPENSE = 'expense',
  NONE = 'none'
}

interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: TravelRequestData | ExpenseData;
}

const FormMenu: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.NONE);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);

  const handleTravelFormSubmit = (data: TravelRequestData) => {
    // In a real application, you would send this data to an API
    console.log('Travel Request Submitted:', data);
    
    setSubmissionResult({
      success: true,
      message: 'Travel request submitted successfully!',
      data: data
    });
  };

  const handleExpenseFormSubmit = (data: ExpenseData) => {
    // In a real application, you would send this data to an API
    console.log('Expense Submitted:', data);
    
    setSubmissionResult({
      success: true,
      message: 'Expense submitted successfully!',
      data: data
    });
  };

  const resetForm = () => {
    setActiveForm(FormType.NONE);
    setSubmissionResult(null);
  };

  const renderForm = () => {
    switch (activeForm) {
      case FormType.TRAVEL_REQUEST:
        return <TravelRequestForm onSubmit={handleTravelFormSubmit} />;
      case FormType.EXPENSE:
        return <ExpenseForm onSubmit={handleExpenseFormSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>

      <div className="form-menu-container">
        <h1>Form Components</h1>
        <p className="description">
          Select a form type to complete. These forms demonstrate basic form handling with React's useState hook.
        </p>

        {!activeForm && !submissionResult ? (
          <div className="form-selection">
            <button 
              className="form-selection-button"
              onClick={() => setActiveForm(FormType.TRAVEL_REQUEST)}
            >
              <h3>Travel Request Form</h3>
              <p>Submit a request for business travel</p>
            </button>
            
            <button 
              className="form-selection-button"
              onClick={() => setActiveForm(FormType.EXPENSE)}
            >
              <h3>Expense Submission Form</h3>
              <p>Submit expenses for reimbursement</p>
            </button>
          </div>
        ) : null}

        {activeForm !== FormType.NONE && !submissionResult ? (
          <div className="active-form-container">
            <button className="back-button" onClick={resetForm}>
              ← Back to Form Selection
            </button>
            {renderForm()}
          </div>
        ) : null}

        {submissionResult ? (
          <div className="submission-result">
            <div className={`result-box ${submissionResult.success ? 'success' : 'error'}`}>
              <h2>{submissionResult.success ? 'Success!' : 'Error'}</h2>
              <p>{submissionResult.message}</p>
              
              {submissionResult.data && (
                <div className="data-preview">
                  <h3>Submitted Data:</h3>
                  <pre>{JSON.stringify(submissionResult.data, null, 2)}</pre>
                </div>
              )}
              
              <button className="action-button" onClick={resetForm}>
                Return to Form Selection
              </button>
            </div>
          </div>
        ) : null}
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

        .form-menu-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 10px;
        }

        .description {
          text-align: center;
          color: #7f8c8d;
          margin-bottom: 30px;
        }

        .form-selection {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .form-selection-button {
          flex: 1;
          min-width: 300px;
          max-width: 400px;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          text-align: left;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .form-selection-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .form-selection-button h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .form-selection-button p {
          color: #7f8c8d;
          margin: 0;
        }

        .active-form-container {
          margin-top: 20px;
        }

        .back-button {
          background-color: #ecf0f1;
          color: #34495e;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .back-button:hover {
          background-color: #dfe6e9;
        }

        .submission-result {
          margin-top: 30px;
        }

        .result-box {
          padding: 30px;
          border-radius: 8px;
          text-align: center;
        }

        .success {
          background-color: #d4f5e8;
          border: 1px solid #2ecc71;
        }

        .error {
          background-color: #fdeded;
          border: 1px solid #e74c3c;
        }

        .result-box h2 {
          margin-top: 0;
          color: #2c3e50;
        }

        .data-preview {
          margin-top: 20px;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 15px;
          border-radius: 8px;
          text-align: left;
        }

        .data-preview h3 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 18px;
        }

        pre {
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 4px;
          overflow: auto;
          font-size: 14px;
        }

        .action-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: 500;
          transition: background-color 0.3s;
        }

        .action-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default FormMenu;