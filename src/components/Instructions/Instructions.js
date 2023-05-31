import React from 'react';
import './Instructions.css';

const Instructions = () => {
  const addCardInstructions = 'To add a card, click on the "Add Card" button. This will generate a new card with a randomly generated number. A new card with a randomly generated number will be added to the list.';

  const sortCardsInstructions = 'To sort the cards, click on the "Sort Cards" button. This will rearrange the cards in ascending order based on their numbers.';

  const deleteCardInstructions = 'To delete a card, click on the "X" icon located on the top right corner of the card. This will remove the card from the list.';

  return (
    <div className="instructions-container">
      <h2>Instructions</h2>
      <p>{addCardInstructions}</p>
      <p>{sortCardsInstructions}</p>
      <p>{deleteCardInstructions}</p>
    </div>
  );
};

export default Instructions;
