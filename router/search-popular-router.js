const router = require('express').Router()
const SearchPopular = require('../controllers/search-popular')

router.post('/year', SearchPopular.year)

module.exports = router