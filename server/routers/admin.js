const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');


router.get('/:adminId',adminControllers.admin_getById);

router.get('/',adminControllers.admin_getAllAdmins);

router.post('/', adminControllers.admin_postAdmin);

router.delete('/:adminId', adminControllers.admin_deleteAdmin);

module.exports = router;
