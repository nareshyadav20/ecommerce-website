const router = require("express").Router();
const Product = require("../models/Product");


// GET ALL PRODUCTS
router.get("/", async (req, res) => {
try{

const products = await Product.find();
res.json(products);

}catch(err){
res.status(500).json({error:err.message});
}
});


// GET SALE PRODUCTS (50% section)
router.get("/sale", async (req,res)=>{
try{

const products = await Product.find().limit(6);
res.json(products);

}catch(err){
res.status(500).json({error:err.message});
}
});


// ADD PRODUCT
router.post("/", async (req, res) => {
try{

const product = new Product(req.body);
await product.save();
res.json(product);

}catch(err){
res.status(500).json({error:err.message});
}
});

module.exports = router;