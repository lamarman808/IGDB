const Game = require('../models/game')

const newGame = (req, res) => {
  res.render('games/new', { errorMsg: '' })
} // Function to Add New Games to the 'new' path

const index = async (req, res) => {
  const games = await Game.find({})
  res.render('games/index', { title: 'Game Info', games })
} // Function to render Games on the 'index' path

const show = async (req, res) => {
  const game = await Game.findById(req.params.id)
  res.render('games/show', { title: 'Game Board', game })
} // Function to Show Games on the 'show' path

const create = async (req, res) => {
  req.body.exclusive = !!req.body.exclusive
  // remove any whitespace at the start & end of console;
  req.body.console = req.body.console.trim()
  if (req.body.console) req.body.console = req.body.console.split(/\s*,\s*/)
  try {
    await Game.create(req.body)
    res.redirect('/games/new')
  } catch (err) {
    res.render('games/new', { errorMsg: err.message })
  }
} // Function to render console(s) array

module.exports = {
  new: newGame,
  index,
  show,
  create
}
