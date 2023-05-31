import React from 'react';
import './Instructions.css';
import {
  ADD_CARD_INSTRUCTIONS,
  SORT_CARDS_INSTRUCTIONS,
  DELETE_CARD_INSTRUCTIONS
} from '../../utils/constants'

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2>Instructions</h2>
      <p>{ADD_CARD_INSTRUCTIONS}</p>
      <p>{SORT_CARDS_INSTRUCTIONS}</p>
      <p>{DELETE_CARD_INSTRUCTIONS}</p>
    </div>
  );
};

export default Instructions;
