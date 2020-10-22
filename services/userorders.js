class OrderServices {


    order = async(username) => {


        return new Promise((resolve, reject) => {

            db.collection('payment_details').find({ user: username }).toArray((err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result !== null) {

                            return resolve({ message: "retrieved successfully", result: result });

                        } else {
                            return reject({ message: "Not retrieved successfully" });
                        }
                    }
                } catch (err) {
                    console.log(err)
                    return reject({ message: " Details Not found", error: "" });
                }

            })

        });


    }

}

let orderService = new OrderServices();

module.exports = orderService;