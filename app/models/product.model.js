const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_table');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    age: String,
    email: String
});

const product = mongoose.model('product', ProductSchema);
// Export the model
module.exports.add  = function(object){
    return new Promise((resolve, reject) => {
        product.create(object, function(err, result){
            if(!err){
                return resolve();
            } else {
                return reject();
            }
        });
    })           
};