const express = require('express')
const authentication = require('../middlewares/authentication')
const UserController =  require('../controllers/user')
const quoteRouter = require('./quote-router')
const popularRouter = require('./search-popular-router')
const musicMatchRouter = require('./music-match-router')

const router = express.Router()


router.get('/register', UserController.register)
router.get('/login', UserController.login)

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use('/quotes', quoteRouter) //untuk percobaan ditaro disini dulu
router.use('/popular', popularRouter)
router.use('/music-match', musicMatchRouter)

router.use(authentication)



module.exports = router