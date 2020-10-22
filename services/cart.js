let nodemailer = require('nodemailer');

class cartServices {


    paymentdetails = async(name, mobile, address, pName, price, email) => {

        return new Promise((resolve, reject) => {

            let d = new Date();
            let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();


            let payment = {
                user: global.username,
                name: name,
                mobile: mobile,
                address: address,
                pName: pName,
                price: price,
                email: email,
                date: date
            }

            db.collection('payment_details').insertOne(payment, (err, result) => {
                if (err) {
                    throw err;
                } else {

                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.mailid,
                            pass: process.env.mailpassword
                        }
                    });

                    let mailOptions = {
                        from: 'jayanthnjk13@gmail.com',
                        to: email,
                        subject: pName,
                        text: 'Purchased successfully-product: ' + pName + '-price: ' + price
                    };

                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                            return resolve({ message: "payment successfull", data: result.ops });

                        }
                    });


                }
            });



        });


    }

}

let cartService = new cartServices();

module.exports = cartService;