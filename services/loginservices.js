let sha1 = require('sha1');
class LoginServices {


    login = async(username, password) => {

        return new Promise((resolve, reject) => {


            let password_encrypt = sha1(password);


            db.collection('user_details').findOne({ $and: [{ username: username }, { password: password_encrypt }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            var d = new Date();
                            let time = d.getHours() + 'Hr ' + d.getMinutes() + 'Min ' + d.getSeconds() + "sec";
                            let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                            let userdata = {
                                username: username,
                                time: time,
                                date: date
                            }
                            db.collection('user_logs').insertOne(userdata, (err, result) => {
                                if (err) {
                                    throw err;
                                } else {

                                    return resolve({ message: "Login Successfull", data: result, username: username });
                                }
                            })

                        } else {
                            return reject({ message: "login Failure : Invalid credentials", error: "" });
                        }
                    }
                } catch (err) {
                    console.log(err);
                    return reject({ message: "Details Not found", error: "" });
                }

            })

        });


    }

}


let LoginService = new LoginServices();

module.exports = LoginService;