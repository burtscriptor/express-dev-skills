var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills')

router.get('/', skillsController.index);

router.get('/:id', skillsController.show);

module.exports = router;

server.listen(3000, () => {
    console.log('server running on http://localhost:3000/')

});