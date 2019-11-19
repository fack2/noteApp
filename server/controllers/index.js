const express = require('express')
const login = require('./login')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')
const router = express.Router()
const { getAllCategories } = require('./getAllCategories')


router.get('/api/dashboard', getAllCategories)

console.log('back end');



router.get('/api/check-auth', auth, checkAuth)
router.post('/api/login', login.get)

module.exports = router



