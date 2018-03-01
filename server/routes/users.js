var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.all)
router.post('/', userController.findOne)
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router;
