const mongoose = require('mongoose')

const Schema = mongoose.Schema

// shortcut to the mongoose.Schema class
const reviewSchema = new Schema({
  content: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
})

const gameSchema = new mongoose.Schema({
  title: String,
  console: String,
  exclusive: Boolean,
  releaseYear: {
    type: Number,
    min: 1994,
    default: 2023
  },
  esrbRating: {
    type: String,
    enum: ['E', 'E10+', 'T', 'M', 'Ao', 'RP']
  },
  multiplayer: Boolean,
  reviews: [reviewSchema]
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Game', gameSchema)
