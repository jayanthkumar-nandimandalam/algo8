const userorders = require('../services/userorders');
class OrdersController {

    orders = async(req, res) => {


        try {

            let result = await userorders.order(global.username);

            if (result) {
                console.log(result);
                res.render("Userorders", {
                    list: result.result,
                    username: global.username,
                    path: "/userorders"
                });

            }

        } catch (e) {
            console.log(e)
            res.redirect('/login');
        }
    }
}


module.exports = OrdersController;