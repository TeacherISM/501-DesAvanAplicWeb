// src/class 1/components/Card.jsx
import React from "react";

const Card = ({ title, description, date, onClick }) => {
  return (
    <div
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
      <small className="text-gray-500">{date}</small>
    </div>
  );
};

export default Card;
