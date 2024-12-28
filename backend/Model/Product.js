const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  Quantity: Number,
})

module.exports = mongoose.model("Product", productSchema);
