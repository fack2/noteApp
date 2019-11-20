const express = require('express')
const login = require('./login')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')
const router = express.Router()
const logout = require('./logout')
const { getAllCategories } = require('./getAllCategories')
const { getNote } = require('./getNote')

router.get('/api/dashboard/:category_id/:user_id/notes', getNote);
router.get('/api/dashboard', auth, getAllCategories)
router.post('/api/login', login.get)
router.get('/api/logout', logout.get)

module.exports = router



