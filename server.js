const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bookingMiddleware = require('./middleware/bookingMiddleware.js');
const bookingRoutes = require('./routes/booking.js');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


// Register booking routes
app.use('/api', bookingRoutes);
// Protected route
app.get('/api/protected', bookingMiddleware, (req, res) => {
    res.json({ msg: 'You accessed a protected route', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
