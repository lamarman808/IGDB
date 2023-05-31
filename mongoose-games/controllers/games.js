const Game = require('../models/game')

const newGame = (req, res) => {
  res.render('games/new', { errorMsg: '' })
}

const index = async (req, res) => {
  const games = await Game.find({})
  res.render('games/index', { title: 'Game Board', games })
}

const create = async (req, res) => {
  req.body.nowShowing = !!req.body.nowShowing
  // remove any whitespace at the start & end of cast;
  req.body.cast = req.body.cast.trim()
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
  try {
    await Game.create(req.body)
    res.redirect('/games/new')
  } catch (err) {
    res.render('games/new', { errorMsg: err.message })
  }
}

module.exports = {
  new: newGame,
  create
}
