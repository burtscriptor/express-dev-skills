var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills')

router.get('/', skillsController.index);

router.get('/new', skillsController.new); // Add skill

router.get('/:id', skillsController.show);

router.post('/', skillsController.create); 

router.delete('/:id', skillsController.delete); // is right path?

module.exports = router;