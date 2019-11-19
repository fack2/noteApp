const express = require('express')
const router = express.Router()
const { getAllCategories } = require('./getAllCategories')


router.get('/api/dashboard', getAllCategories)


module.exports = router



