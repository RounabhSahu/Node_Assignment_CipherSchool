const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  // add any other relevant fields here
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    // add any other relevant fields here
  });

// Export the schemas as module exports
module.exports.Product = mongoose.model('Product', productSchema);
module.exports.User = mongoose.model('User', userSchema);