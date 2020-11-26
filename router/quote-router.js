const router = require('express').Router()
const QuoteController = require('../controllers/quote-controller')

router.get('/random-quote', QuoteController.getRandomQuote)
router.get('/random-insult', QuoteController.getRandomInsult)
module.exports = router