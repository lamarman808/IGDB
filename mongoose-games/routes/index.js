const express = require('express')
const router = express.Router()
const passport = require('passport/lib')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Game Base' })
})

// Login Route
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
)

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/games',
    failureRedirect: '/'
  })
)

// Logout Route
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router
