const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    datetime: {
        type: String,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
