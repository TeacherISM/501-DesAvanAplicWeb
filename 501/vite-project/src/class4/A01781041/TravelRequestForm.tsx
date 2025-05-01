import React, { useState } from 'react';

interface TravelRequestFormProps {
  onSubmit: (formData: TravelRequestData) => void;
}

export interface TravelRequestData {
  destination: string;
  departureDate: string;
  returnDate: string;
  purpose: string;
  estimatedCost: string;
  transportation: string;
  accommodation: string;
  comments: string;
}

const TravelRequestForm: React.FC<TravelRequestFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TravelRequestData>({
    destination: '',
    departureDate: '',
    returnDate: '',
    purpose: '',
    estimatedCost: '',
    transportation: 'flight',
    accommodation: 'hotel',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="travel-request-form">
      <h2>Travel Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
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
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose of Travel</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="estimatedCost">Estimated Cost ($)</label>
          <input
            type="number"
            id="estimatedCost"
            name="estimatedCost"
            value={formData.estimatedCost}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="transportation">Transportation</label>
            <select
              id="transportation"
              name="transportation"
              value={formData.transportation}
              onChange={handleChange}
            >
              <option value="flight">Flight</option>
              <option value="train">Train</option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="accommodation">Accommodation</label>
            <select
              id="accommodation"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
            >
              <option value="hotel">Hotel</option>
              <option value="airbnb">Airbnb</option>
              <option value="hostel">Hostel</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">Submit Request</button>
          <button type="reset" className="reset-button">Reset</button>
        </div>
      </form>

      <style jsx>{`
        .travel-request-form {
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

export default TravelRequestForm;