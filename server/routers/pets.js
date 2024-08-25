const express = require('express');;
const router = express.Router();

const petsController = require('../controllers/pets');


router.get('/',petsController.pets_getAllPets);

router.get('/:id',petsController.pets_getPetsById);

router.post('/',petsController.pets_postPet);

router.delete('/',petsController.pets_deletePetById);

router.delete('/:id',petsController.pets_deletePetById);

router.patch('/:id',petsController.pets_EditPetsInfo);


module.exports = router;
