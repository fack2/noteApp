const express = require('express')
const login = require('./login')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')
const router = express.Router()
const { getAllCategories } = require('./getAllCategories')
const logout = require('./logout')


router.get('/api/dashboard', auth, getAllCategories)
router.post('/api/login', login.get)
router.get('/api/logout', logout.get)

module.exports = router



