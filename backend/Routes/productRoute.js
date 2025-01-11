const express = require('express')
// const app = express();

const { addProduct, allProduct } = require('../Controller/ProductController')
const { upload } = require('../Middleware/upload');
const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/allProduct", allProduct);
// router.post("/addimage", upload);

module.exports = router;



