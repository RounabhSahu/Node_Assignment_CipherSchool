const mongoose = require('mongoose');
const dotenv =require('dotenv')


dotenv.config();
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

