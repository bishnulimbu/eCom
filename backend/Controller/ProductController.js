const Product = require('../model/Product')

const product1 = new Product({
  productName: "Apple",
  category: "fruit",
  price: 40,
  Quantity: 1000,
})

product1.save()
  .then((res) => {
    console.log("saved successfully", res)
  })
  .catch((err) => {
    console.error(err);
  })
Product.insertMany([
  {
    productName: "Banana",
    category: "fruit",
    price: 20,
    Quantity: 500,
  },
  {
    productName: "Carrot",
    category: "vegetable",
    price: 15,
    Quantity: 800,
  },
  {
    productName: "Orange",
    category: "fruit",
    price: 50,
    Quantity: 600,
  },
  {
    productName: "Tomato",
    category: "vegetable",
    price: 25,
    Quantity: 400,
  },
  {
    productName: "Milk",
    category: "dairy",
    price: 60,
    Quantity: 300,
  },
  {
    productName: "Bread",
    category: "bakery",
    price: 35,
    Quantity: 200,
  },
  {
    productName: "Cheese",
    category: "dairy",
    price: 150,
    Quantity: 100,
  },
  {
    productName: "Potato",
    category: "vegetable",
    price: 10,
    Quantity: 1200,
  },
])
  .then((res) => { console.log("successfully inserted.", res) })
  .catch((err) => { console.error("isn't inserted", err) })
