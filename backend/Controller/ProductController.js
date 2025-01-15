const Product = require('../Model/Product')
const { Types } = require('mongoose');
const ObjectId = Types.ObjectId;

async function getProduct(req,res){
  try{
    const {id} = req.params;
    const result = await Product.findById(id);
    console.log("product found");
    res.status(200).json(result)
  }catch(e){
    console.error("error:",e.message);
    res.status(500).json({message:"unable to fetch the product"});
  }
}

async function addProduct(req, res) {
  try {
    const {productName, category, price, quantity}= req.body;
    if(!productName || !category || !price || !quantity){
      return res.status(400).json({message:"all fields are required."});
    }
    if(typeof productName != 'string' || typeof category != 'string' || isNaN(price) || isNaN(quantity)||Number(price)<=0 || Number(quantity)<=0){
      return res.status(400).json({message:'Invalid data provided, please check your input.'})
    }
    await Product.create({productName, category, price, quantity});
    res.status(201).json({message:"product added."});
  } catch (e) {
    console.error("failed to add the data", e);
    res.status(500).json({message:"failed to insert data.",error:e.message});
  }

}

async function allProduct(req, res) {
  try {
    const allProducts = await Product.find();
    res.status(200).json({ message: "success", data: allProducts });
  } catch (e) {
    console.error("unable to fetch data",e.message);
    res.status(500).json({ message: "unable to fetch data.",error:e.message })
  }
}

async function deleteProduct(req,res){
  try{
    const {id} = req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:"invalid product id"});
    }
    const result = await Product.deleteOne({ _id: new ObjectId(id)});
    console.log("deleted the product",result);
    res.status(200).json({message:"successfully deleted product"})
  }catch(e){
    console.error("error",e.message);
    res.status(500).json({message:"couldn't preform the delete operation."})
  }
}

async function editProduct(req,res){
  try{
    const {id} = req.params;
    const {productName,price,quantity,category} = req.body;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:"invalid product id"})
    }
    const product = await Product.findById(id);
    if(!product){
      return res.status(400).json({message:"no product found."});
    }
    if(!productName && !price && !quantity && !category){
      return res.status(400).json({message:"some data fields are missing."});
    }
    const result =await Product.updateOne({_id:id},
      {$set: {productName,quantity,price,category}}
    );
    if(result.modifiedCount===0){
      res.status(400).json({message:"no changed data in the update."});
    }else if(result.matchedCount===0){
      res.status(400).json({message:"no product found."});
    }else{
    res.status(200).json({message:"successfully updated the product"});
    }
  }catch(e){
    console.error("error:",e.message);
    res.status(500).json({message:"unable to update the product."});
  }
}

module.exports = { addProduct, allProduct, deleteProduct, editProduct, getProduct }
