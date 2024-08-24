import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem('pets')) || []);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [petForm, setPetForm] = useState({
    name: '',
    type: '',
    breed: '',
    price: ''
  });
  // const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  const handleAddPet = () => {
    setPetForm({
      name: '',
      type: '',
      breed: '',
      price: ''
    });
    setEditIndex(null);
    setShowForm(true);
  };

  const handleEditPet = (index) => {
    setPetForm(pets[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDeletePet = (index) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      const updatedPets = pets.filter((_, i) => i !== index);
      setPets(updatedPets);
    }
  };

  const handleFormSubmit = () => {
    if (editIndex !== null) {
      const updatedPets = [...pets];
      updatedPets[editIndex] = petForm;
      setPets(updatedPets);
    } else {
      setPets([...pets, petForm]);
    }
    setShowForm(false);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/');
  // };

  return (
    <div className="inventory-container">
      <h2>Pet Inventory</h2>
      <button onClick={handleAddPet}>Add New Pet</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div className="pet-cards">
        {pets.length > 0 ? (
          pets.map((pet, index) => (
            <div className="pet-card" key={index}>
              <h3>{pet.name}</h3>
              <p>Type: {pet.type}</p>
              <p>Breed: {pet.breed}</p>
              <p>Price: {pet.price}</p>
              <button onClick={() => handleEditPet(index)}>Edit</button>
              <button onClick={() => handleDeletePet(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No pets available.</p>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>{editIndex !== null ? 'Edit Pet' : 'Add Pet'}</h2>
            <input
              type="text"
              placeholder="Name"
              value={petForm.name}
              onChange={(e) => setPetForm({ ...petForm, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Type"
              value={petForm.type}
              onChange={(e) => setPetForm({ ...petForm, type: e.target.value })}
            />
            <input
              type="text"
              placeholder="Breed"
              value={petForm.breed}
              onChange={(e) => setPetForm({ ...petForm, breed: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={petForm.price}
              onChange={(e) => setPetForm({ ...petForm, price: e.target.value })}
            />
            <div className="button-container">
              <button onClick={handleFormSubmit}>
                {editIndex !== null ? 'Update' : 'Add'}
              </button>
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
