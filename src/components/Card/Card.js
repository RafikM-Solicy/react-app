import React from 'react';
import './Card.css';

const Card = ({ card, onDelete }) => {
    return (
      <div className="card">
        <span className="delete-icon" onClick={() => onDelete(card.id)}>x</span>
        <div className="card-content">
          <p>{card.value}</p>
        </div>
      </div>
    );
  
};

export default Card;