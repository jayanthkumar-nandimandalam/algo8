const signupServices = require('../services/Userregisterservice');
class signupController {

    userSignup = async(req, res) => {

        let name = req.body.name;
        let mail = req.body.email;
        let mobile = req.body.mobile;
        let password = req.body.password;

        global.res = res;
        try {
            let result = await signupServices.userSignup(name, mail, mobile, password);

            if (result) {
                global.message = "User registered successfully";
                res.redirect('/login');
            }

        } catch (e) {
            console.log(e);
            res.redirect('/signup');
        }
    }
}


module.exports = signupController;