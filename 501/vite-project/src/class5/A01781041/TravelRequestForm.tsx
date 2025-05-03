import React, { useState, FormEvent, ChangeEvent } from 'react';

interface TravelRequestValues {
  destination: string;
  departureDate: string;
  returnDate: string;
  purpose: string;
  estimatedCost: string;
  transportation: string;
  accommodation: string;
  advanceRequired: boolean;
  advanceAmount: string;
  comments: string;
}

// Define validation error type
interface ValidationErrors {
  destination?: string;
  departureDate?: string;
  returnDate?: string;
  purpose?: string;
  estimatedCost?: string;
  transportation?: string;
  accommodation?: string;
  advanceAmount?: string;
  comments?: string;
}

const TravelRequestForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [values, setValues] = useState<TravelRequestValues>({
    destination: '',
    departureDate: '',
    returnDate: '',
    purpose: '',
    estimatedCost: '',
    transportation: 'flight',
    accommodation: 'hotel',
    advanceRequired: false,
    advanceAmount: '',
    comments: ''
  });

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Destination validation
    if (!values.destination) {
      newErrors.destination = 'Destination is required';
      isValid = false;
    } else if (values.destination.length < 3) {
      newErrors.destination = 'Destination must be at least 3 characters';
      isValid = false;
    }

    // Departure date validation
    if (!values.departureDate) {
      newErrors.departureDate = 'Departure date is required';
      isValid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const departureDate = new Date(values.departureDate);
      if (departureDate < today) {
        newErrors.departureDate = 'Departure date cannot be in the past';
        isValid = false;
      }
    }

    // Return date validation
    if (!values.returnDate) {
      newErrors.returnDate = 'Return date is required';
      isValid = false;
    } else if (values.departureDate && values.returnDate) {
      const departureDate = new Date(values.departureDate);
      const returnDate = new Date(values.returnDate);
      if (returnDate < departureDate) {
        newErrors.returnDate = 'Return date must be after departure date';
        isValid = false;
      }
    }

    // Purpose validation
    if (!values.purpose) {
      newErrors.purpose = 'Purpose of travel is required';
      isValid = false;
    } else if (values.purpose.length < 10) {
      newErrors.purpose = 'Please provide a more detailed purpose (at least 10 characters)';
      isValid = false;
    }

    // Estimated cost validation
    if (!values.estimatedCost) {
      newErrors.estimatedCost = 'Estimated cost is required';
      isValid = false;
    } else if (isNaN(Number(values.estimatedCost)) || Number(values.estimatedCost) <= 0) {
      newErrors.estimatedCost = 'Amount must be a positive number';
      isValid = false;
    }

    // Advance amount validation
    if (values.advanceRequired && !values.advanceAmount) {
      newErrors.advanceAmount = 'Advance amount is required';
      isValid = false;
    } else if (values.advanceRequired && (isNaN(Number(values.advanceAmount)) || Number(values.advanceAmount) <= 0)) {
      newErrors.advanceAmount = 'Amount must be a positive number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setValues({
        ...values,
        [name]: target.checked
      });
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmissionStatus('submitting');
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form values:', values);
        setSubmissionStatus('success');
        
        // Reset form after 3 seconds on success
        setTimeout(() => {
          setValues({
            destination: '',
            departureDate: '',
            returnDate: '',
            purpose: '',
            estimatedCost: '',
            transportation: 'flight',
            accommodation: 'hotel',
            advanceRequired: false,
            advanceAmount: '',
            comments: ''
          });
          setErrors({});
          setSubmissionStatus('idle');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>
      
      <div className="form-container">
        <h1>Travel Request Form with Validation</h1>
        <p className="description">
          This form demonstrates custom form validation. Try submitting with incorrect data to see validation in action.
        </p>
        
        {submissionStatus === 'success' ? (
          <div className="success-message">
            <h2>Travel Request Submitted Successfully!</h2>
            <p>Your request has been received and is being processed.</p>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={values.destination}
                onChange={handleChange}
                className={errors.destination ? 'input-error' : ''}
              />
              {errors.destination && <div className="error-message">{errors.destination}</div>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="departureDate">Departure Date</label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={values.departureDate}
                  onChange={handleChange}
                  className={errors.departureDate ? 'input-error' : ''}
                />
                {errors.departureDate && <div className="error-message">{errors.departureDate}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="returnDate">Return Date</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={values.returnDate}
                  onChange={handleChange}
                  className={errors.returnDate ? 'input-error' : ''}
                />
                {errors.returnDate && <div className="error-message">{errors.returnDate}</div>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose of Travel</label>
              <textarea
                id="purpose"
                name="purpose"
                value={values.purpose}
                onChange={handleChange}
                className={errors.purpose ? 'input-error' : ''}
                rows={3}
              />
              {errors.purpose && <div className="error-message">{errors.purpose}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="estimatedCost">Estimated Cost ($)</label>
              <input
                type="text"
                id="estimatedCost"
                name="estimatedCost"
                value={values.estimatedCost}
                onChange={handleChange}
                className={errors.estimatedCost ? 'input-error' : ''}
              />
              {errors.estimatedCost && <div className="error-message">{errors.estimatedCost}</div>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="transportation">Transportation</label>
                <select
                  id="transportation"
                  name="transportation"
                  value={values.transportation}
                  onChange={handleChange}
                  className={errors.transportation ? 'input-error' : ''}
                >
                  <option value="flight">Flight</option>
                  <option value="train">Train</option>
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="other">Other</option>
                </select>
                {errors.transportation && <div className="error-message">{errors.transportation}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="accommodation">Accommodation</label>
                <select
                  id="accommodation"
                  name="accommodation"
                  value={values.accommodation}
                  onChange={handleChange}
                  className={errors.accommodation ? 'input-error' : ''}
                >
                  <option value="hotel">Hotel</option>
                  <option value="airbnb">Airbnb</option>
                  <option value="hostel">Hostel</option>
                  <option value="other">Other</option>
                </select>
                {errors.accommodation && <div className="error-message">{errors.accommodation}</div>}
              </div>
            </div>

            <div className="form-group checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="advanceRequired"
                  name="advanceRequired"
                  checked={values.advanceRequired}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <label htmlFor="advanceRequired" className="checkbox-label">
                  Advance Payment Required
                </label>
              </div>
            </div>

            {values.advanceRequired && (
              <div className="form-group">
                <label htmlFor="advanceAmount">Advance Amount ($)</label>
                <input
                  type="text"
                  id="advanceAmount"
                  name="advanceAmount"
                  value={values.advanceAmount}
                  onChange={handleChange}
                  className={errors.advanceAmount ? 'input-error' : ''}
                />
                {errors.advanceAmount && <div className="error-message">{errors.advanceAmount}</div>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="comments">Additional Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={values.comments}
                onChange={handleChange}
                className={errors.comments ? 'input-error' : ''}
                rows={4}
              />
              {errors.comments && <div className="error-message">{errors.comments}</div>}
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-button" 
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
              </button>
              <button 
                type="button" 
                className="reset-button" 
                onClick={() => {
                  setValues({
                    destination: '',
                    departureDate: '',
                    returnDate: '',
                    purpose: '',
                    estimatedCost: '',
                    transportation: 'flight',
                    accommodation: 'hotel',
                    advanceRequired: false,
                    advanceAmount: '',
                    comments: ''
                  });
                  setErrors({});
                }}
              >
                Reset
              </button>
            </div>

            <div className="validation-info">
              <h3>Validation Rules</h3>
              <ul>
                <li>Destination must be at least 3 characters</li>
                <li>Departure date must be in the future</li>
                <li>Return date must be after departure date</li>
                <li>Purpose must be at least 10 characters</li>
                <li>Estimated cost must be a positive number</li>
                <li>If advance payment is required, amount must be specified</li>
              </ul>
            </div>
          </form>
        )}

        <div className="formik-yup-explanation">
          <h2>About Form Validation</h2>
          <div className="explanation-grid">
            <div className="explanation-card">
              <h3>Validation Benefits</h3>
              <ul>
                <li>Prevents invalid data submission</li>
                <li>Provides immediate user feedback</li>
                <li>Improves user experience</li>
                <li>Ensures data quality</li>
                <li>Reduces server-side validation needs</li>
              </ul>
            </div>
            <div className="explanation-card">
              <h3>Validation Techniques</h3>
              <ul>
                <li>Pattern matching</li>
                <li>Type checking</li>
                <li>Conditional validation</li>
                <li>Cross-field validation</li>
                <li>Custom error messages</li>
              </ul>
            </div>
          </div>
        </div>
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
        
        .form-container {
          max-width: 800px;
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

        .form {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
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

        .input-error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 14px;
          margin-top: 4px;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .checkbox-input {
          width: 18px;
          height: 18px;
        }

        .checkbox-label {
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

        .submit-button:hover:not(:disabled) {
          background-color: #2980b9;
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }

        .reset-button {
          background-color: #ecf0f1;
          color: #34495e;
        }

        .reset-button:hover {
          background-color: #dfe6e9;
          transform: translateY(-2px);
        }

        .success-message {
          background-color: #d4f5e8;
          border: 1px solid #2ecc71;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 30px;
        }

        .success-message h2 {
          color: #27ae60;
          margin-top: 0;
        }

        .validation-info {
          background-color: #eff8ff;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
        }

        .validation-info h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .validation-info ul {
          margin: 0;
          padding-left: 20px;
        }

        .validation-info li {
          margin-bottom: 8px;
          color: #34495e;
        }

        .formik-yup-explanation {
          margin-top: 40px;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
        }

        .formik-yup-explanation h2 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }

        .explanation-grid {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .explanation-grid {
            flex-direction: column;
          }
        }

        .explanation-card {
          flex: 1;
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .explanation-card h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 15px;
        }

        .explanation-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .explanation-card li {
          margin-bottom: 8px;
          color: #34495e;
        }
      `}</style>
    </div>
  );
};

export default TravelRequestForm;