var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Tim's Here"
  }, {
  	id: 2,
  	username: "Tom's Here"
  }, {
  	id: 3,
  	username: "Alyssa's Here"
  }, {
  	id: 4,
  	username: "Kris's Here"
  }]);
});

module.exports = router;
