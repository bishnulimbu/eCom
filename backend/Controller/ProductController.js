const Product = require('../Model/Product')


async function addProduct(req, res) {
  try {
    // const {productName}= req.body;
    const product1 = new Product({
      productName: "Apple",
      category: "fruit",
      price: 40,
      Quantity: 1000,
    })
    product1.save();
    console.log("product successfully added.");
    res.status(201).send(product1);
  } catch (err) {
    console.log("not inserted.")
  }

}

async function allProduct(req, res) {
  try {
    const allProducts = await Product.find();
    res.status(200).json({ message: "success", data: allProducts });
  } catch (e) {
    res.status(500).json({ message: "unable to fetch data." })
  }
}

module.exports = { addProduct, allProduct }
