import React, { useState } from 'react';
import './adoption.css';

const InventoryPage = () => {
  const petsData = [
    {
      name: 'Bella',
      type: 'Dog',
      breed: 'Labrador Retriever',
      price: '$500',
      initialCount: 5
    },
    {
      name: 'Milo',
      type: 'Cat',
      breed: 'Siamese',
      price: '$300',
      initialCount: 3
    },
    {
      name: 'Charlie',
      type: 'Dog',
      breed: 'Poodle',
      price: '$450',
      initialCount: 4
    }
  ];

  const [pets, setPets] = useState(
    petsData.map((pet) => ({ ...pet, count: pet.initialCount, error: '' }))
  );

  const handleAdoptPet = (index) => {
    setPets((prevPets) =>
      prevPets.map((pet, i) => {
        if (i === index) {
          if (pet.count > 0) {
            return { ...pet, count: pet.count - 1, error: '' };
          } else {
            return { ...pet, error: 'No more pets available for adoption!' };
          }
        }
        return pet;
      })
    );
  };

  return (
    <div className="inventory-container">
      <h2>Pet Inventory</h2>
      <div className="pet-cards">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Price: {pet.price}</p>
            <p>Available: {pet.count}</p>
            <button
              onClick={() => handleAdoptPet(index)}
              disabled={pet.count === 0}
            >
              Adopt
            </button>
            {pet.error && <p className="error-message">{pet.error}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
