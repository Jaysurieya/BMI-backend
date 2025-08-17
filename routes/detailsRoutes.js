const express = require('express');
const router = express.Router();
const detailsController = require('../Controllers/detailsController');

router.post('/details_cu', detailsController.createUserDetails);

module.exports = router;