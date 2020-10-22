let sha1 = require('sha1');

class signupServices {


    userSignup = async(name, mail, mobile, password) => {

        return new Promise((resolve, reject) => {

            db.collection('user_details').findOne({ mobile: mobile }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result === null) {

                            let password_encrypt = sha1(password);
                            let userData = {
                                username: name,
                                mobile: mobile,
                                email: mail,
                                password: password_encrypt,

                            }
                            db.collection('user_details').insertOne(userData, (err, result) => {
                                if (err) {
                                    throw err;
                                } else {
                                    return resolve({ message: "Insertion successfull", data: result.ops });
                                }
                            })
                        } else {
                            return reject({ message: "User Already Exists with PhoneNumber " + mobile, error: "" });
                        }
                    }
                } catch (err) {
                    return reject({ message: "Error While Registering data", error: "" });
                }

            })

        });


    }

}

let signupService = new signupServices();

module.exports = signupService;