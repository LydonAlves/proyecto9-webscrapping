const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to Database successfully')
  } catch (error) {
    console.log('Error connecting to database')
  }
}

module.exports = connectDB
