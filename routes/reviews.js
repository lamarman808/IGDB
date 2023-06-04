const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/logger')

// path for POST /games/ :id/reviews
router.post('/games/:id/reviews', ensureLoggedIn, reviewsCtrl.create)
router.delete('/games/:id/reviews', ensureLoggedIn, reviewsCtrl.delete)

module.exports = router
