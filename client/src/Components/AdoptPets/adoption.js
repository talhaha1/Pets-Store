// src/components/AdoptPets/AdoptPets.js
import React, { useState, useEffect } from 'react';
//import jwtDecode from 'jwt-decode'; // Correct import for named export
import './adoption.css';

const AdoptPets = () => {
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem('pets')) || []);
  const [showForm, setShowForm] = useState(false);
  const [adoptForm, setAdoptForm] = useState({
    username: 'Your Username', // Default username
    petName: '',
    petType: '',
    petBreed: '',
    price: '',
    cnic: '',
    phone: '',
    accountNumber: '',
    cvc: ''
  });
  const [error, setError] = useState('');

  // Function to get username from localStorage
  const getUsernameFromLocalStorage = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser || 'Your Username'; // Fallback if no user is logged in
  };

  // Update username when component mounts
  useEffect(() => {
    setAdoptForm((prevForm) => ({
      ...prevForm,
      username: getUsernameFromLocalStorage()
    }));
  }, []);

  const handleAdoptPet = (pet) => {
    setAdoptForm({
      ...adoptForm,
      petName: pet.name,
      petType: pet.type,
      petBreed: pet.breed,
      price: pet.price
    });
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields are filled
    if (!adoptForm.cnic || !adoptForm.phone || !adoptForm.accountNumber || !adoptForm.cvc) {
      setError('All fields are required.');
      return;
    }

    alert('Adoption successful!');

    const updatedPets = pets.filter((p) => p.name !== adoptForm.petName);
    setPets(updatedPets);

    localStorage.setItem('pets', JSON.stringify(updatedPets));

    setShowForm(false);
  };

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    setPets(storedPets);
  }, []);

  return (
    <div className="adopt-container">
      <h2>Adopt a Pet</h2>
      <div className="pet-cards">
        {pets.length > 0 ? (
          pets.map((pet, index) => (
            <div className="pet-card" key={index}>
              <h3>{pet.name}</h3>
              <p>Type: {pet.type}</p>
              <p>Breed: {pet.breed}</p>
              <p>Price: {pet.price}</p>
              <button onClick={() => handleAdoptPet(pet)}>Adopt</button>
            </div>
          ))
        ) : (
          <p>No pets available for adoption.</p>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>Adopt Pet Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleFormSubmit}>
              <input type="text" value={adoptForm.username} readOnly />
              <input type="text" value={adoptForm.petName} readOnly />
              <input type="text" value={adoptForm.petType} readOnly />
              <input type="text" value={adoptForm.petBreed} readOnly />
              <input type="text" value={adoptForm.price} readOnly />
              <input
                type="text"
                placeholder="CNIC"
                value={adoptForm.cnic}
                onChange={(e) => setAdoptForm({ ...adoptForm, cnic: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={adoptForm.phone}
                onChange={(e) => setAdoptForm({ ...adoptForm, phone: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Account Number"
                value={adoptForm.accountNumber}
                onChange={(e) => setAdoptForm({ ...adoptForm, accountNumber: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="CVC"
                value={adoptForm.cvc}
                onChange={(e) => setAdoptForm({ ...adoptForm, cvc: e.target.value })}
                required
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptPets;
