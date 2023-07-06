const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv =require('dotenv')
const productsRouter = require('./products');
const usersRouter = require('./users')


dotenv.config();
const mongoURL = process.env.MONGO_URL;
const app = express();
const port = process.env.PORT || 3000;

// Database connection
mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));


// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});