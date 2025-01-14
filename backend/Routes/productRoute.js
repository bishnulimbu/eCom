const express = require('express')

const { addProduct, allProduct, deleteProduct} = require('../Controller/ProductController')
// const { upload } = require('../Middleware/upload');
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/allProduct", allProduct);
router.delete("/deleteProduct/:id",deleteProduct);
// router.post("/addimage", upload);

module.exports = router;



