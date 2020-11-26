const express = require('express')
const authentication = require('../middlewares/authentication')
const otorisesion = require('../middlewares/autorisesion')
const UserController =  require('../controllers/user')
const router = express.Router()

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.use(authentication)
// router.use('/:id',otorisesion)



module.exports = router