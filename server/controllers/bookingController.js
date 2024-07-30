const BookingModel = require("../models/BookingModel");

const createBooking = (req, res) => {
  const {username,email,phone,date,message,services} = req.body

  // creates and saves the doc
  try {
    
    const booking = BookingModel.create({
      username,
      email,
      phone,
      date,
      message,
      services,
    });

    res.status(200).json("booking made!");

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const bookings = (req, res) => {
  const {username,email,phone,date,message} = req.params
  const allBookings = BookingModel.find({});

  if (!allBookings) {
    res.status(404).json({ error: "No Bookings yet" });
  }

  res.json({Bookings : "Good morning"})
  // res.status(200).json(allBookings);
};

module.exports = {
  createBooking,
  bookings,
};
