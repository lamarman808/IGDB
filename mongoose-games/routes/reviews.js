const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

// POST /games/ :id/reviews
router.post('/games/:id/reviews', reviewsCtrl.create)

module.exports = router
