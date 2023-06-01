const Game = require('../models/game')

const index = async (req, res) => {
  const games = await Game.find({})
  res.render('games/index', { title: 'Game Info', games })
} // Function to render Games on the 'index' path

const show = async (req, res) => {
  const game = await Game.findById(req.params.id)
  res.render('games/show', { title: 'Game Board', game })
} // Function to Show Games on the 'show' path

const newGame = (req, res) => {
  res.render('games/new', { title: 'New Game', errorMsg: '' })
} // Function to Add New Games to the 'new' path

const create = async (req, res) => {
  req.body.exclusive = !!req.body.exclusive
  req.body.multiplayer = !!req.body.multiplayer
  req.body.couchCoOp = !!req.body.couchCoOp
  // removal of whitespace at the start & end of 'console';
  req.body.consoles = req.body.consoles.trim()
  console.log(req.body)
  if (req.body.consoles) req.body.consoles = req.body.consoles.split(/\s*,\s*/)
  try {
    await Game.create(req.body)
    res.redirect('/games')
  } catch (err) {
    console.log(err) // REMOVE AS ERRORS FADE
    res.render('games/new', { errorMsg: err.message })
  }
} // Function to render console(s) array

const deleteGame = (req, res) => {
  Game.deleteOne(req.params.id)
  res.redirect('/games')
} // Function to delete an individual Game entry

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame
}
