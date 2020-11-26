const router = require('express').Router()
const QuoteController = require('../controllers/garden-controller')

router.get('/random', QuoteController.getRandom)
//router.get('/genres', QuoteController.getAllGenres)

module.exports = router