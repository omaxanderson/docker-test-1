var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(process.env.TEST_ENV);
    console.log('home');
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
    console.log('hello');
  res.send(JSON.stringify({
      name: 'max',
      hello: 'world',
  }));
});

router.get('/env', function(req, res, next) {
  res.send(JSON.stringify({
      name: 'max',
      hello: 'world',
      env: process.env.TEST_ENV || 'not set...',
      docker_compose_env: process.env.DOCKER_COMPOSE_TEST_ENV,
      change: 'false',
  }));
});


module.exports = router;
