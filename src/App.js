import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { generateRandomNumber } from './utils/hooks';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

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
      <Header addCard={addCard} sortCards={sortCards} />
      <Container cards={cards} onDelete={deleteCard} />
      <Footer />
    </div>
  );
}

export default App;
