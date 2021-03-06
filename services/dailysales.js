class dailysalesServices {


    sales = async() => {

        return new Promise((resolve, reject) => {

            let d = new Date();
            let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

            db.collection('payment_details').find({ date: date }).toArray((err, result) => {
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

let dailysaleServices = new dailysalesServices();

module.exports = dailysaleServices;