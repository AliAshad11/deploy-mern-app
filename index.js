const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

// Enable CORS for all routes and origins
app.use(cors());

// Health check route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
