require('dotenv').config()
const express = require('express')
const connectDB = require('./src/config/db')
const cardsRouter = require('./src/api/routes/starWarsCard')

const app = express()
connectDB()

app.use('/api/v1/starWarsInfo', cardsRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('route not found')
})

app.listen(3000, () => {
  console.log('Listening in http://localhost:3000')
})

const databankLocation = 'Locations'
const databankCharacter = 'Characters'
const databankVehicles = 'Vehicles'

scrapper(databankCharacter)
