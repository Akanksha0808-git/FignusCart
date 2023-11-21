const express = require('express');
require("dotenv").config();

const connection=require("./config/db")
const cors = require("cors");
const PORT=4000;
const routes=require("./Routes/RoutesCompo")
const paymentRoute = require('./Routes/paymentRoute');

const app = express();
var http = require('http').Server(app);

// Corspolicy used here 
app.use(cors({
    // origin : "*"
    origin: ['http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))
var http = require('http').Server(app);

// body parser used here

app.use(express.json());
app.use('/',paymentRoute);

app.use("/",routes)

// app.listen(PORT,async ()=>{
//     try{ 
//       await connection();
//       console.log(`server started after making connection `,PORT)}
//     catch(err){
//       console.log(err,"error occured due to server start")
//     }
   
//   })
const server = app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server started after making connection`, PORT);
  } catch (err) {
    console.log(err, "Error occurred due to server start");
  }
});

// Increase server timeout (for example, to 60 seconds)
server.timeout = 60000;
  http.listen(3000, function(){
    console.log('Server is running');
});