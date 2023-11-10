// let arr = []; // database
const User=require("../model/userSchema")
const Products=require("../model/productSchema")
const saltround = 10
const jwt=require("jsonwebtoken")
const secretkey="#@$%^&*"
const bcrypt = require("bcrypt")


const Register = async(req, res) => {

try{
    const {name , email ,phone, password} = req.body;
    const founduser = await User.findOne({email});
    if (founduser) {
      return res.send({ msg: "User already exist" });
    }

    //Hashing Password
    const hashpassword = await bcrypt.hash(password, saltround);
    
    //creating user 
    const temp = await User.create( {
      name:name,
      phone:phone,
      email: email,
      password: hashpassword,
    });
    console.log(temp)
    res.send({msg:"User Registered successfullyy",user:temp})
}
catch(err){
    console.log(`Error is creating user :- ${err.message}`);
    res.status(500).send({msg : err.message})
}
   
};

const login = async(req, res) => {
    // const userdata = req.body;
    // console.log(userdata);
    try{
        let {email, password} = req.body

        const login = await User.findOne({email: email});

        if(!login) {
            return res.status(200).send({msg : "User not registered "});
        }
        if((await bcrypt.compare(password, login.password)) == false){
            return res.status(200).send({msg : "User password is wrong"});
        }
        // genrate token
        const token = jwt.sign({_id :login._id}, secretkey , {expiresIn : "24h"});
        const loginemail = login.email;
        const loginpass = login.password;

        res.status(200).send({user : [loginemail, loginpass], token : token, userid : login._id})
    }
    catch{
        res.status(500).send({msg : err.message});
    }
    
  };
  const dashboard = (req, res)=>{
    return res.send({
        result : "My name is Akanksha and You are Verify"
    })
}
const searchproduct = async(req, res)=>{
    try{
        const search = req.body.search;
        console.log(search);

        const searching = await Products.find({
            Name : {$regex : new RegExp(search , "i")}, // "i" for case-insensitive search
        });
        if(searching.length > 0){
            return res.status(200).json({success : true, msg : "Products Details", data : searching});
        }else{
            return res.status(404).json({msg : "No matching products found"});
        }
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({msg : "Internal Server Error" , error : err.message});
    }
}

module.exports = { Register, login,dashboard,searchproduct };
