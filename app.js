const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbconfig = require('./config/dbConfig');
const router = require("./routes/routes");
const logger = require("./logger/logger.js");
const response = require("./responses/response");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Publishable_Key = process.env.publickey;

app.use("/", router);



app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
global.message = "";
app.get("/login", (req, res) => {

    try {
        res.render("Loginpage", { message: global.message });
    } catch (e) {
        res.render("Homepage");
    }

});

app.get("/home", (req, res) => {
    try {
        res.render("Homepage");
    } catch (e) {
        res.render("Homepage");
    }

});
app.get("/signup", (req, res) => {
    try {
        res.render("Signuppage");
    } catch (e) {
        res.render("Homepage");
    }

});

app.get("/userorders", (req, res) => {
    try {
        res.render("Userorders");
    } catch (e) {
        res.render("Homepage");
    }

});

app.get("/cart", (req, res) => {
    try {
        res.render("Usercart", {
            key: Publishable_Key
        });
    } catch (e) {
        res.render("Homepage");
    }

});

app.listen(process.env.PORT || 3000, () => {
    wLogger.info(`Server Listening at port `);
});