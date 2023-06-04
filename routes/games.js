const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../config/logger')

// You'll be creating this controller module next
const gamesCtrl = require('../controllers/games')

// GET /games
router.get('/', gamesCtrl.index)
// GET /games/new
router.get('/new', ensureLoggedIn, gamesCtrl.new)
// GET /games/:id (show functionality) MUST be below new route
router.get('/:id', gamesCtrl.show)
// POST /games
router.post('/', ensureLoggedIn, gamesCtrl.create)
// DELETE One Jawn
router.delete('/:id', ensureLoggedIn, gamesCtrl.delete)

module.exports = router
