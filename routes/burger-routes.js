const router = require('express').Router(),
	burgerController = require('../controllers/burgers_controller'); 

router
	.get('/', burgerController.getHome)
	.post('/addBurger', burgerController.postHome)
	.post('/', burgerController.deleteBurger);

module.exports = router;