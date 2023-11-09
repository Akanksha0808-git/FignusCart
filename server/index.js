const express = require('express');
const cors = require("cors");
const PORT=7000;
const Home = require('./Routes/RoutesCompo');

const app = express();

// Corspolicy used here 
app.use(cors({
    origin : "*"
}))
// body parser used here
app.use(express.json());

app.get("/", Home)

app.listen(PORT,()=>{
    console.log(`Server is Runing at http://localhost:${PORT}`)
})