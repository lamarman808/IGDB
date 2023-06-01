const Games = require('../models/game')

const create = async (req, res) => {
  const game = await Games.findById(req.params.id)
  game.reviews.unshift(req.body)
  try {
    await game.save()
  } catch (err) {
    console.log(err) //Perhaps do something else once It all works!
  }
  res.redirect(`/games/${game._id}`)
}

module.exports = {
  create
}
