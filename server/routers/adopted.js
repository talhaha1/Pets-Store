const express = require('express');
const router = express.Router();

const adoptedController = require('../controllers/adopted')



router.get('/',adoptedController.adopted_getAllAdoptions);

router.get('/:id',adoptedController.adopted_getAdoptionsById);

router.post('/',adoptedController.adopted_postAdoptions);


module.exports = router;
