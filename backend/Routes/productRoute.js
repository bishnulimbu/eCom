const express = require('express')

const { addProduct,getProduct, allProduct, deleteProduct, editProduct} = require('../Controller/ProductController')
// const { upload } = require('../Middleware/upload');
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/allProduct", allProduct);
router.get('/getProduct/:id',getProduct)
router.delete("/deleteProduct/:id",deleteProduct);
router.patch("/editProduct/:id",editProduct)
// router.post("/addimage", upload);

module.exports = router;



