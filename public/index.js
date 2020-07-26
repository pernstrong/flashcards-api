
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5000
// const cards = require("./data.json")

// app.get('/', (req, res) => {
//   res.send("Welcome to the Flashcards API")
// })

// app.get('/cards', (req,res) => {
//   res.send(cards)
// })

// app.listen(port, () => {
//   console.log(`Flash cards is running on http://localserver:${port}`)
// })




var express = require('express');
var router = express.Router();

const cards = require("./data.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards', function(req, res, next) {
  res.send(cards);
});


module.exports = router;
