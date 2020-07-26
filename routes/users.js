var express = require('express');
var router = express.Router();
const cards = require("./../public/data.json")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(cards);
// });

router.get('/cards', function(req, res) {
  res.send(cards)
})


module.exports = router;
