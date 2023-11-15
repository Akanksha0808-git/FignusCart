const Products = require("../model/productSchema")
const data=require("../Data")


const allproducts = async (req, res)=>{
    try{
        const productsData = await Products.create(data)
        // console.log(productsData)
        res.status(201).send(productsData)
    }catch(err){
        console.log("Error to send data on frontend :" + err.message)
    }
}

module.exports = allproducts