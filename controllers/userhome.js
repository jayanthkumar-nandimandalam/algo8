const ProductServices = require('../services/productsservices');
class ProductController {

    products = async(req, res) => {

        try {
            let result = await ProductServices.product();
            //console.log(result);
            if (result) {

                res.render("Userhomepage", {
                    products: result.result,
                    username: global.username
                });
            }


        } catch (e) {
            console.log(e);
        }
    }
}


module.exports = ProductController;