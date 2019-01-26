const Product = require('../models/product.model');


//Simple version, without validation or sanitation
exports.add_get = function (req, res) {
    res.render('add_product.ejs');
};
exports.sign = function (req, res) {
    res.render('sign.ejs');
};

//handle post add ( create new user);
exports.add_post = function (req, res) {
    Product.add(req.body).then(() => res.send("Add success :)"), () => res.send("Add fail!"));

};

