const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/add', product_controller.add_get);
router.post('/add',product_controller.add_post);
router.get('/sign', product_controller.sign);




module.exports = router;