const express = require('express');
const router = express.Router();
const  RegUsers  = require('../../controllers/regController')

router.post('', RegUsers)   // gose to rolesController.js file

module.exports = router;