const mongoose = require('mongoose')

const Schema = mongoose.Schema
const gameSchema = new Schema({
  title: String,
  console: String,
  releaseDate: Date,
  exclusive: Boolean
})

module.exports = mongoose.model('Game', gameSchema)
