var express = require('express');
var router = express.Router();
const controller = require('../controllers/auth')


router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/login', controller.login)
router.post('/login', controller.login)

router.get('/registration', controller.registration)
router.post('/registration', controller.signup)

module.exports = router;