const dailysalesServices = require('../services/dailysales');
class DailysalesController {

    Sales = async(req, res) => {

        try {
            let result = await dailysalesServices.sales();
            console.log(result);
            if (result) {
                    
                     res.render("Dailysales",{
                        products: result.result,
                        path: "/dailysales"
                     });
            }
            

        } catch (e) {
            console.log(e);
        }
    }
}


module.exports = DailysalesController;