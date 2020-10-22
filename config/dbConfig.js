const mongodb = require('mongodb');

// const url = 'mongodb://localhost:27017/feedback'
const url = process.env.mongo_URL;
let db;

const mongoClient = new mongodb.MongoClient(url, { useUnifiedTopology: true });

//connecting to database
mongoClient.connect(function(err) {
    try {
        if (err) {
            throw err;
        } else {
            console.log("Connection to MongoDB database established");
        }

    } catch (error) {
        console.log('Error while connecting to database' + error);
    }
    db = mongoClient.db("mobihub");
    //save the db variable for all routes
    global.db = db;
});

module.exports = mongodb;