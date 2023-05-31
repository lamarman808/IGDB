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
  releaseYear: {
    type: Number,
    min: 1994,
    default: 2023
  },
  esrbRating: {
    type: String,
    enum: ['E', 'E10+', 'T', 'M', 'Ao', 'RP']
  },
  console: {
    type: String,
    enum: [
      'PlayStation',
      'PlayStation 2',
      'PlayStation 3',
      'PSP',
      'PS4',
      'PS Vita',
      'PS5',
      'Xbox',
      'Xbox360',
      'Xbox One',
      'Xbox Series X',
      'SG-1000',
      'Sega Master System',
      'Sega Genesis',
      'Sega Game Gear',
      'Sega Saturn',
      'Sega Dreamcast',
      'Nintendo',
      'Super Nintendo',
      'Nintendo 64',
      'Gamecube',
      'Wii',
      'Wii U',
      'Gameboy Color',
      'Gameboy Advance',
      'PC'
    ]
  },
  exclusive: Boolean,
  multiplayer: Boolean,
  couchCoOp: Boolean,
  reviews: [reviewSchema]
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Game', gameSchema)
