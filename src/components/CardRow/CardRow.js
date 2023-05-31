import React from 'react';
import Card from '../Card/Card';
import './CardRow';

const CardRow = ({ cards, onDelete }) => {
  return (
    <div className="card-row">
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CardRow;