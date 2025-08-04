const jwt = require('jsonwebtoken');
const env = require('dotenv').config().parsed; // Load environment variables


const bookingMiddleware = (req, res, next) => {
    console.log('Booking middleware hit',req.body);
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });
    console.log('Auth middleware hit',token); // Debugging line
    try {
        console.log('Decoding token:', token); // Debugging line
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};
module.exports = bookingMiddleware;