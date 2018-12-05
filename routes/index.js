var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Главная страница',
    meta: {
      description: 'Главная страница',
      keywords: 'Главная страница'
    }
  });
});

module.exports = router;