const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const bookingMiddleware = require('../middleware/bookingMiddleware');

// @route POST /api/book
router.post('/book', bookingMiddleware, async (req, res) => {
    console.log('Booking endpoint hit');
    try {
        const { name, service, datetime } = req.body;
        const booking = new Booking({ name, service, datetime });
        await booking.save();
        res.json({ message: `Successfully booked ${service} for ${datetime}` });
    } catch (error) {
        console.error('Booking save error:', error);
        res.status(500).json({ error: "Failed to book service" });
    }
});

module.exports = router; // ✅ This is the most important line
