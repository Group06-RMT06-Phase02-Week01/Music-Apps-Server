const express = require('express')
const authentication = require('../middlewares/authentication')
const otorisesion = require('../middlewares/autorisesion')
const UserController =  require('../controllers/user')
const quoteRouter = require('./garden-router')

const router = express.Router()


//router.use(authentication)
// router.use('/:id',otorisesion)
router.get('/register', UserController.register)
router.get('/login', UserController.login)
router.use('/quotes', quoteRouter) 


module.exports = router