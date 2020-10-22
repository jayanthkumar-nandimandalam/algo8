const { Db } = require("mongodb");

class AdminServices {


    admin = async(username) => {

        return new Promise(async(resolve, reject) => {

            try {

                const totalsales = await db.collection("payment_details").countDocuments();

                const totalusers = await db.collection("user_details").countDocuments();

                global.totalusers = totalusers - 1;
                global.totalsales = totalsales;

                return resolve({ message: "successfull", data: "" });


            } catch (e) {
                console.log(e);
                return reject({ message: "Details Not found", error: "" });

            }




        });


    }

}

let adminService = new AdminServices();

module.exports = adminService;