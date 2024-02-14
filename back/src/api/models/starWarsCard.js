const mongoose = require('mongoose')

const starWarsCard = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgSrc: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'starWarsCards'
  }
)

const Card = mongoose.model('starWarsCards', starWarsCard, 'starWarsCards')

module.exports = Card
