import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Instructions from './components/Instructions/Instructions';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:4001/cards', { method: 'GET'});
      if (response.ok) {
        const fetchedCards = await response.json();
        setCards(fetchedCards);
      } else {
        console.error('Error fetching cards:', response.status);
      }
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const addCard = async () => {
    const newCard = {
      value: generateRandomNumber(),
    };

    try {
      const response = await fetch('http://localhost:4001/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        const createdCard = await response.json();
        setCards((prevCards) => [...prevCards, createdCard]);
      } else {
        console.error('Error creating card:', response.status);
      }
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const deleteCard = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/cards/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      } else {
        console.error('Error deleting card:', response.status);
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const sortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a.value - b.value);
    setCards(sortedCards);
  };


  return (
    <div>
      <header>
        <button onClick={addCard}>Add Card</button>
        <button onClick={sortCards}>Sort Cards</button>
      </header>

      <main>
        <div className="card-container">
          <div className="card-row">
            {cards.map((card) => (
              <Card key={card.id} card={card} onDelete={deleteCard} />
            ))}
          </div>
        </div>
        <div className="instructions">
          <Instructions />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy;All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
