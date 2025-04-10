import * as React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  date: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, date, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{date}</small>
    </div>
  );
};

export default Card;
