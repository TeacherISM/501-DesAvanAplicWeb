import React from 'react';
import './Card.css';

//Homework Assignment
const Card =({title, description, date , onClick}) => {
    return (
        <div className='card' onClick={onClick}>
            <h2>{title}</h2>
            <p>{description}</p>
            <small>{date}</small>
        </div>
    )
}