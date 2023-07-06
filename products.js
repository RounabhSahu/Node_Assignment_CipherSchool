const express = require('express');
const app = express.Router();
const {Product} = require('./db_schema');



app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    // assign any other relevant fields here
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
      const product = await Product.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.put('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'Product not found' });
      }
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.price = req.body.price || product.price;
      product.quantity = req.body.quantity || product.quantity;
      // assign any other relevant fields here
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.id });
      if (product == null) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  module.exports = app;