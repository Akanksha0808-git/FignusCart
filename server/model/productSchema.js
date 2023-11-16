const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  heading: String,
  details:String,
  image:String,
  PriceDrop : String,
  price: Number,
  rating: Number,
  category: String,
  subCategory: String,
  GetitBy: String,
});


const Products = new mongoose.model("products" , productSchema);

module.exports = Products