const productData = require('./Data');
const Products  = require('./model/productSchema');

const defaultData = async()=>{
    try{
        await Products.deleteMany({})
        const storeData = await Products.insertMany(productData);
    }catch(err){
        console.log(`Error is found inserting Data ${err}`);
    }
}

module.exports = defaultData