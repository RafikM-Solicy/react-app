import React from 'react';
import './Header.css'

const Header = ({ addCard, sortCards }) => {
  return (
    <header>
      <button onClick={addCard}>Add Card</button>
      <button onClick={sortCards}>Sort Cards</button>
    </header>
  );
};

export default Header;