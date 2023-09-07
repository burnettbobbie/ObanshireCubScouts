import React, { useState, useEffect } from "react";

const ScavengerHuntGame = () => {
  const allItems = [
    { id: 1, name: "Rock" },
    { id: 2, name: "Leaf" },
    { id: 3, name: "Feather" },
    { id: 4, name: "Pinecone" },
    { id: 5, name: "Stick" },
    { id: 6, name: "Acorn" },
    { id: 7, name: "Shell" },
    { id: 8, name: "Flower" },
    { id: 9, name: "Mushroom" },
    { id: 10, name: "Seashell" },
    { id: 11, name: "Fossil" },
    { id: 12, name: "Twig" },
    { id: 13, name: "Caterpillar" },
    { id: 14, name: "Seed" },
    { id: 15, name: "Bark" },
    { id: 16, name: "Spider web" },
  ];

  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Shuffle the array of all items
    const shuffledItems = shuffleArray(allItems);
    // Select the first 6 items from the shuffled array
    const selectedItems = shuffledItems.slice(0, 6);
    // Set the selected items as the initial state of items
    setItems(selectedItems);
  }, []);

  const handleItemClick = (itemId) => {
    // Toggle the "found" property of the clicked item
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, found: !item.found } : item
      )
    );
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const isDesktop = window.innerWidth > 1200;

  return (
    <div className="scavenger-hunt-game">
      <h2>Scavenger Hunt!</h2>
      <h4>Find the following items and cross them off the list:</h4>

      {isDesktop ? (
        // Render as a list on desktop
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              style={{
                textDecoration: item.found ? "line-through" : "none",
                cursor: "pointer",
                listStyleType: "none",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        // Render as a modal on mobile
        <div>
          <button
            onClick={openModal}
            className={` ${modalOpen ? "hide-game-modal" : ""}`}
          >
            Open Game
          </button>
          {modalOpen && (
            <div className="modal scavenger-background-image">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div>
                  <ul>
                    {items.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        style={{
                          textDecoration: item.found ? "line-through" : "none",
                          cursor: "pointer",
                          listStyleType: "none",
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Function to shuffle an array in-place
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default ScavengerHuntGame;
