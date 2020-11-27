const express = require('express')
const authentication = require('../middlewares/authentication')
const UserController =  require('../controllers/user')
const quoteRouter = require('./quote-router')
const musicMatchRouter = require('./music-match-router')

const router = express.Router()


router.get('/register', UserController.register)
router.get('/login', UserController.login)

router.post('/', UserController.register)
router.post('/login', UserController.login)

router.use('/quotes', quoteRouter) 
router.use('/music-match', musicMatchRouter)

router.use(authentication)//untuk percobaan ditaro disini dulu



module.exports = router