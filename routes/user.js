const express = require('express')
const router = express.Router()
const { userById } = require('../middlewares/user')
const { getUser } = require('../controllers/userController')
const { requireSignin, isAuth } = require('../middlewares/auth')

router.get('/livreur/:userID', [requireSignin, isAuth], getUser)
router.get('/client/:userID', [requireSignin, isAuth], getUser)
router.get('/manager/:userID', [requireSignin, isAuth], getUser)

router.param('userID', userById)

module.exports = router