const express = require('express');
const router = express.Router();
global.express = express;
global.router = router;


const Userregister = require('../controllers/Userregister');
const Login = require('../controllers/login');
const ProductController = require('../controllers/products');
const UserController = require('../controllers/userhome');
const CartController = require('../controllers/cart');
const Userorders = require('../controllers/userorders');
const Adminhome = require('../controllers/adminhome');
const Dailysales = require('../controllers/dailysales');
const Userlogs = require('../controllers/userlogs');

let register = new Userregister();
let login = new Login();
let products = new ProductController();
let userhome = new UserController();
let cart = new CartController();
let userorders = new Userorders();
let adminhome = new Adminhome();
let dailysales = new Dailysales();
let userlogs = new Userlogs();

router.post('/register', register.userSignup);
router.post('/login', login.loginauth);
router.get('/', products.products);
router.get('/userhome', userhome.products);
router.post('/payment', cart.payment);
router.get('/userorders', userorders.orders);
router.get("/adminhome", adminhome.details);
router.get("/dailysales", dailysales.Sales);
router.get("/userlogs", userlogs.Userlogs);

module.exports = router;