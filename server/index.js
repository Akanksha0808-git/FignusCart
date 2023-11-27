// const express = require('express');
// require("dotenv").config();

// const connection=require("./config/db")
// const cors = require("cors");
// const PORT=4000;
// const routes=require("./Routes/RoutesCompo")
// const paymentRoute = require('./Routes/paymentRoute');

// const app = express();
// var http = require('http').Server(app);

// // Corspolicy used here 
// app.use(cors({
//     origin : "*"
//     // origin: ['http://localhost:5173'],
//     // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     // credentials: true,
// }))
// var http = require('http').Server(app);

// // body parser used here

// app.use(express.json());
// app.use('/',paymentRoute);

// app.use("/",routes)

// // app.listen(PORT,async ()=>{
// //     try{ 
// //       await connection();
// //       console.log(`server started after making connection `,PORT)}
// //     catch(err){
// //       console.log(err,"error occured due to server start")
// //     }
   
// //   })
// const server = app.listen(PORT, async () => {
//   try {
//     await connection();
//     console.log(`Server started after making connection`, PORT);
//   } catch (err) {
//     console.log(err, "Error occurred due to server start");
//   }
// });

// // // Increase server timeout (for example, to 60 seconds)




// // server.timeout = 60000;
// //   http.listen(3000, function(){
// //     console.log('Server is running');
// // });


const express = require('express');
require("dotenv").config();
const datacreation=require('./datacreation')
const connection = require("./config/db");
const cors = require("cors");
const routes = require("./Routes/RoutesCompo");
const stripe = require("stripe")(
    "sk_test_51OFXU6SJDDUS7wiVF42k1bQr5SjgEIKlK4RCo2QyAWXpZPxTFVvCEmRjPqScw86Z2YZUoOzzAt5rhFr2MVhmOQkI00uHO7oleN"
  );
const app = express();
const PORT = process.env.PORT || 4000;

// Cors policy
app.use(cors({
    origin: "*"
}));

// Body parser
app.use(express.json());

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});





// Start the server
// const server = app.listen(PORT, async () => {
//     try {
//         await connection();
//         console.log(`Server started after making connection on port ${PORT}`);
//     } catch (err) {
//         console.error(err, "Error occurred due to server start");
//     }
// });
const startConnection = async ()=>{
  try{
      await connection()
      app.listen(PORT, () => {
          console.log(`Server is Runing on http://localhost:${PORT}`)
      })
     datacreation()
      
  }
  catch(err){
      console.log(`Database is showing Error ${err.message}`)
  }
}

startConnection()
// Payment Gateway 


app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products)
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount:product.price * 100,
      },
      quantity: product.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://fignuscart-e-commerce.netlify.app/Success",
      cancel_url: "https://fignuscart-e-commerce.netlify.app/Cancel",
  
    });
    res.json({id:session.id})
  });