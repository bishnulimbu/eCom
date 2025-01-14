const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number,
})

module.exports = mongoose.model("Product", productSchema);
