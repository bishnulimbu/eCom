const Product = require('../model/Product')


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

module.exports = { addProduct }
//   productName: "Apple",
//   category: "fruit",
//   price: 40,
//   Quantity: 1000,
// })

// Product.insertMany([
//   {
//     productName: "Banana",
//     category: "fruit",
//     price: 20,
//     Quantity: 500,
//   },
//   {
//     productName: "Carrot",
//     category: "vegetable",
//     price: 15,
//     Quantity: 800,
//   },
//   {
//     productName: "Orange",
//     category: "fruit",
//     price: 50,
// const product1 = new Product({
//     Quantity: 600,
//   },
//   {
//     productName: "Tomato",
//     category: "vegetable",
//     price: 25,
//     Quantity: 400,
//   },
//   {
//     productName: "Milk",
//     category: "dairy",
//     price: 60,
//     Quantity: 300,
//   },
//   {
//     productName: "Bread",
//     category: "bakery",
//     price: 35,
//     Quantity: 200,
//   },
//   {
//     productName: "Cheese",
//     category: "dairy",
//     price: 150,
//     Quantity: 100,
//   },
//   {
//     productName: "Potato",
//     category: "vegetable",
//     price: 10,
//     Quantity: 1200,
//   },
// ])
//   .then((res) => { console.log("successfully inserted.", res) })
//   .catch((err) => { console.error("isn't inserted", err) })
