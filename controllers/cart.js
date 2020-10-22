const CartServices = require('../services/cart');
var Secret_Key = process.env.privatekey;

var stripe = require('stripe')(Secret_Key);
class CartController {

    payment = async(req, res) => {

        let name = req.body.name;
        let mobile = req.body.mobile;
        let address = req.body.address;
        let price = req.body.price;
        let pName = req.body.pName;
        let email = req.body.stripeEmail;
        global.res = res;

        try {
            0
            let result = await CartServices.paymentdetails(name, mobile, address, pName, price, email);

            if (result) {
                res.redirect('/userhome');
            }

        } catch (e) {
            console.log(e)
            res.redirect('/cart');
        }
    }
}


module.exports = CartController;