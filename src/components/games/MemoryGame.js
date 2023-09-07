import React, { useState, useEffect } from "react";

const MemoryGame = () => {
  // State declarations
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Function to shuffle the cards array
  const shuffleCards = (cards) => {
    // Create a copy of the cards array
    const shuffledCards = [...cards];

    // Shuffle the cards using Fisher-Yates algorithm
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    return shuffledCards;
  };

  // Function to handle card click event
  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) {
      // If two cards are already flipped or the clicked card is already matched, do nothing
      console.log(matchedCards);
      return;
    }

    // Add the clicked card to the flippedCards array
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, id]);
  };

  // useEffect hook to initialize cards
  useEffect(() => {
    // Define the initial state of the cards array
    const initialCards = [
      { id: 1, value: "🔦" },
      { id: 2, value: "🌲" },
      { id: 3, value: "🔥" },
      { id: 4, value: "🏕️" },
      { id: 5, value: "🌳" },
      { id: 6, value: "🔧" },
      { id: 7, value: "🧭" },
      { id: 8, value: "⛺" },
    ];

    // Shuffle the initial cards
    const shuffledCards = shuffleCards(initialCards);

    // Set the initial state of cards
    setCards(shuffledCards);
  }, []);

  // useEffect hook to check for matches
  useEffect(() => {
    const checkForMatch = () => {
      const [firstCard, secondCard] = flippedCards;

      if (cards[firstCard].value === cards[secondCard].value) {
        // If the flipped cards match, add them to the matchedCards array and clear the flippedCards array
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard, secondCard]);
        setFlippedCards([]);
      } else {
        // If the flipped cards don't match, reset the flippedCards array after a delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }
    };

    if (flippedCards.length === 2) {
      // Check for a match when two cards are flipped
      const timer = setTimeout(() => {
        checkForMatch();
      }, 500);

      // Cleanup the timer if the component unmounts or the flippedCards change
      return () => clearTimeout(timer);
    }
  }, [flippedCards, cards]);

  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      <h4>Match the cards to win!</h4>
      <div className="cards">
        {/* Render each card */}
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card.id) ? "flipped" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            {/* Display the value of flipped cards */}
            {flippedCards.includes(card.id) ? card.value : ""}
          </div>
        ))}
      </div>
      {/* Display completion message */}
      {matchedCards.length === cards.length && <p>Congratulations! You completed the game!</p>}
    </div>
  );
};

export default MemoryGame;
