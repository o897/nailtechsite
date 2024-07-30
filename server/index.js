require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bookingRoutes = require('./routes/booking')
const cors = require('cors')
const app = express()

app.use(cors())
//middleware to collect data from user 
app.use(express.json()) //so can use req.body

app.use('/tlamis', bookingRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to the DB"))


app.listen(3001, (req,res) => {
    console.log(`listening on port 3001`)
});
