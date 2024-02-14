const Card = require('../models/starWarsCard')
const cards = require('../../../SWCards.json')

const insertManyCards = async (req, res, next) => {
  try {
    await Card.insertMany(cards.results)
    return res.status(201).json('All games uploaded to the database')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { insertManyCards }
