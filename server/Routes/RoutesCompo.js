const allproducts=require("../controller/productController")
const { Register, login, searchproduct, dashboard } = require("../controller/userController");
const userAuth = require("../middleware/authmiddleware");
const routes = require("express").Router();

// getall productsdata
routes.get("/data", allproducts)

// register
routes.post("/register", Register)

// login
routes.post("/login", login)

// search products 
routes.post("/search", searchproduct)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);

module.exports =routes;


