
const express = require('express')
const router = express.Router()
const registervalidation = require('../middleware/registerValidation')
const authentication = require('../middleware/authmiddlware')
const {register,login,getuserProfile}=require('../controller/registerController')
router.post('/register',registervalidation,register)
router.post('/login',login)
router.get('/profile',authentication,getuserProfile)
module.exports = router