const express = require('express')
const { createBooking , bookings } = require('../controllers/bookingController')
const router = express.Router()

router.get('/',bookings)
router.post('/book',createBooking)

module.exports = router