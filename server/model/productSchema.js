const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  heading: String,
  details:String,
  image:String,
  PriceDrop : String,
  price: String,
  rating: String,
  category: String,
  subCategory: String,
  GetitBy: String,
});


const Products = new mongoose.model("Products" , productSchema);

module.exports = Products