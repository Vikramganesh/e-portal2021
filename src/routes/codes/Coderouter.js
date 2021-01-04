const express = require('express');
const router = express.Router();
const { addNewCode, getCodes, getCodesById, updateCodesById} = require('../../controllers/codesController')

router.post('', addNewCode)   // gose to rolesController.js file
router.get('', getCodes) 
router.get('/:id', getCodesById) 
router.put('', updateCodesById) 
module.exports = router;