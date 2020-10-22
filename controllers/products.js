const ProductServices = require('../services/productsservices');
class ProductController {

    products = async(req, res) => {

        try {
            let result = await ProductServices.product();
            console.log(result);
            if (result) {

                res.render("Homepage", {
                    products: result.result,
                    path: "/Homepage"
                });
            }


        } catch (e) {
            console.log(e);
        }
    }
}


module.exports = ProductController;