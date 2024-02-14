const { insertManyCards } = require('../controllers/starWarsCard')

const cardsRouter = require('express').Router()

cardsRouter.post('/upload-starwarsCards', insertManyCards)

module.exports = cardsRouter
