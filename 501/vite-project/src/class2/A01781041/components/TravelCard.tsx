// src/class2/A01781041/components/TravelCard.tsx
import React from 'react';

// Define props interface for our reusable card component
interface TravelCardProps {
  title: string;
  description: string;
  date: string; 
  onClick?: () => void; // Optional click handler
}

export const TravelCard: React.FC<TravelCardProps> = ({ 
  title, 
  description, 
  date, 
  onClick 
}) => {
  // Handle click with optional logging
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log(`Travel card clicked: ${title}`);
    }
  };

  return (
    <div className="travel-card" onClick={handleClick}>
      <div className="travel-card-content">
        <h3 className="travel-card-title">{title}</h3>
        <p className="travel-card-description">{description}</p>
        <div className="travel-card-date">
          <span className="date-label">Date:</span> {date}
        </div>
      </div>

      <style jsx>{`
        .travel-card {
          width: 100%;
          max-width: 350px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          margin: 15px;
        }
        
        .travel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .travel-card-content {
          padding: 20px;
        }
        
        .travel-card-title {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .travel-card-description {
          color: #555;
          margin-bottom: 15px;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        
        .travel-card-date {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: #666;
          padding-top: 10px;
          border-top: 1px solid #eee;
        }
        
        .date-label {
          font-weight: 600;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default TravelCard;