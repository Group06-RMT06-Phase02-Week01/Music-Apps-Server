const router = require('express').Router()
const QuoteController = require('../controllers/quote-controller')
const authentication = require('../middlewares/authentication')

router.get('/random-insult', QuoteController.getRandomInsult)

router.use(authentication)
router.get('/random-quote', QuoteController.getRandomQuote)
module.exports = router