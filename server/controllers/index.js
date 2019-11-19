const express = require('express')
const router = express.Router()
const { getAllCategories } = require('./getAllCategories')
const { getNote }= require('./getNote')


router.get('/api/dashboard/:category_id/:user_id/notes', getNote);
router.get('/api/dashboard', getAllCategories)

module.exports = router



