const adminServices = require('../services/adminhome');
class LoginController {

    details = async(req, res) => {

        try {

            let result = await adminServices.admin();

            if (result) {

                console.log({
                    totalsale: global.totalsales,
                    totalusers: global.totalusers
                });
                res.render("Adminhomepage", {
                    totalsale: global.totalsales,
                    totalusers: global.totalusers
                });

            }

        } catch (e) {
            console.log(e)
            res.redirect('/login');
        }
    }
}


module.exports = LoginController;