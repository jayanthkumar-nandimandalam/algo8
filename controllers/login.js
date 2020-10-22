const LoginServices = require('../services/loginservices');
class LoginController {

    loginauth = async(req, res) => {

        let username = req.body.username;
        let password = req.body.password;
        global.res = res;

        try {

            let result = await LoginServices.login(username, password);

            console.log(username)

            if (result) {
                // return response.done(result.message, result.data);
                if (username == "mobihubadmin") {
                    global.username = username;
                    res.redirect('/adminhome');
                } else {
                    global.username = username;
                    res.redirect('/userhome');
                }

            }

        } catch (e) {
            console.log(e)
            global.message = "Invalid credentials"
            res.redirect('/login');
        }
    }
}


module.exports = LoginController;