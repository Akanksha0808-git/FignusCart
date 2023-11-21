const paypal = require('paypal-rest-sdk');

const { PAYPAL_MODE, PAYPAL_CLIENT_KEY, PAYPAL_SECRET_KEY } = process.env;

paypal.configure({
  'mode': PAYPAL_MODE, //sandbox or live
  'client_id': PAYPAL_CLIENT_KEY,   //client id 
  'client_secret': PAYPAL_SECRET_KEY  // client secret key
});

const renderBuyPage = async(req,res)=>{

    try {
        
        res.render('index');

    } catch (error) {
        console.log(error.message);
    }

}

// const payProduct = async(req,res)=>{
//     const { products } = req.body;
//     console.log(products)
//     try {
        
//         const create_payment_json = {
//             "intent": "sale",
//             "payer": {
//                 "payment_method": "paypal"
//             },
//             "redirect_urls": {
//                 "return_url": "http://localhost:3000/success",
//                 "cancel_url": "http://localhost:3000/cancel"
//             },
//             "transactions": [{
//                 "item_list": {
//                     "items": [{
//                         "name": "Book",
//                         "sku": "001",
//                         "price": "25.00",
//                         "currency": "USD",
//                         "quantity": 1
//                     }]
//                 },
//                 "amount": {
//                     "currency": "USD",
//                     "total": "25.00"
//                 },
//                 "description": "Hat for the best team ever"
                
//             }]
//         };

//         paypal.payment.create(create_payment_json, function (error, payment) {
//             if (error) {
//                 throw error;
//             } else {
//                 for(let i = 0;i < payment.links.length;i++){
//                   if(payment.links[i].rel === 'approval_url'){
//                     res.redirect(payment.links[i].href);
//                   }
//                 }
//             }
//           });

//     } catch (error) {
//         console.log(error.message);
//     }

// }
const payProduct = async (req, res) => {
    const { products } = req.body;

    try {
        // const transactionItems = products.map((product) => ({
        //     name: product.details, // or product.heading based on your preference
        //     sku: product.id,
        //     price: (parseFloat(product.price.replace('₹', '').replace(',', '')) * product.quantity).toFixed(2), // Adjust the price calculation based on your requirements
        //     currency: "INR",
        //     quantity: product.quantity
        // }));
        const transactionItems = filteredItems.map((item) => ({
            name: item.details, // or item.heading based on your preference
            sku: item.id,
            price: (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2),
            currency: "USD",
            quantity: item.quantity
        }));
        
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:4000/success",
                "cancel_url": "http://localhost:4000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": transactionItems
                },
                "amount": {
                    "currency": "USD",
                    "total": transactionItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)
                },
                "description": "Payment for products"
            }]
        };

        // paypal.payment.create(create_payment_json, function (error, payment) {
        //     if (error) {
        //         throw error;
        //     } else {
        //         for (let i = 0; i < payment.links.length; i++) {
        //             if (payment.links[i].rel === 'approval_url') {
        //                 res.redirect(payment.links[i].href);
        //             }
        //         }
        //     }
        // });
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.error("Error creating PayPal payment:", error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log("PayPal API Response:", payment);
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const successPage = async(req,res)=>{

    try {
        
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.render('success');
            }
        });

    } catch (error) {
        console.log(error.message);
    }

}

const cancelPage = async(req,res)=>{

    try {

        res.render('cancel');

    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    renderBuyPage,
    payProduct,
    successPage,
    cancelPage
}