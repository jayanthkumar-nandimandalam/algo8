

class productServices {


    product = async() => {

        return new Promise((resolve, reject) => {

            db.collection('products_details').find({}).toArray((err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result !== null) {
                                                       
                            return resolve({ message: "retrieved successfully",result:result});
                            
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

let productService = new productServices();

module.exports = productService;