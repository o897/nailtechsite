const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    username: {
      type: String,
    },
    email : {
      type: String,
    },
    phone: {
      type: Number,
    },
    date: {
      type: String,
    },
    message : {
      type : String,
    },
    services : {
      type : [String],
      required : true,
    }
  },
  { timestamps: true }
);



const reservedSchema = new Schema (
  {
    reserved_dates : {
      type : String,
    },
    count : {
      type : Number,
    }
  },
  {timestamps : true}
)

const ReservationModel = mongoose.model("Reservation", reservedSchema)

module.exports = mongoose.model("Booking", bookingSchema);
