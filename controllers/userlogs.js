const userlogServices = require('../services/userlogs');
class UserlogController {

    Userlogs = async(req, res) => {

        try {
            let result = await userlogServices.userlogs();
            console.log(result);
            if (result) {
                    
                     res.render("Userlogs",{
                        products: result.result,
                        path: "/userlogs"
                     });
            }
            

        } catch (e) {
            console.log(e);
        }
    }
}


module.exports = UserlogController;