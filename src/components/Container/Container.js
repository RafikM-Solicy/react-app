import React from 'react';
import CardRow from '../CardRow/CardRow';
import Instructions from '../Instructions/Instructions';

const Container = ({ cards, onDelete }) => {
  return (
    <main>
      <CardRow cards={cards} onDelete={onDelete} />
      <Instructions />
    </main>
  );
};

export default Container;