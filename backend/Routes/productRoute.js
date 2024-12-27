const express = require('express')
// const app = express();

const { addProduct } = require('../Controller/ProductController')
const router = express.Router();

router.post("/addproduct", addProduct);

module.exports = router;



