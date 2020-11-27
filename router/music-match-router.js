const router = require('express').Router()
const MusicMatchController = require('../controllers/music-match-controller')

router.get('/search/:artist/:length', MusicMatchController.searchByArtist)
router.get('/search/:artist/:length/:page_number', MusicMatchController.searchByArtist)
//length is data length or number of data to be shown
module.exports = router