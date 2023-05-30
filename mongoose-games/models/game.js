const mongoose = require('mongoose')

const Schema = mongoose.Schema

// shortcut to the mongoose.Schema class
const reviewSchema = new Schema(
  {
    content: { type: String, required: true },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  },
  {
    timestamp: true
  }
)

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    console: { type: String, required: true },
    exclusive: { Boolean },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear()
      },
      min: 1994,
      max: 2023
    },
    esrbRating: {
      type: String,
      enum: ['E', 'E10+', 'T', 'M', 'Ao', 'RP']
    },
    cast: [String],
    multiplayer: { type: Boolean, default: true },
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Game', gameSchema)
