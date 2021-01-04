const express = require('express');
const router = express.Router();
const { addNewRole,getRoles, getRolesById, updateRolesById} = require('../../controllers/rolesController')

router.post('', addNewRole)   // gose to rolesController.js file
router.get('', getRoles) 
router.get('/:id', getRolesById) 
router.put('', updateRolesById) 
module.exports = router;