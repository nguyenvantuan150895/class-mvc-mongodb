const BaseModel = require('./base_model');

const schema = {
    name: { type: String },
    price: { type: Number }
};

// Init class
class ProductModel extends BaseModel {
    constructor() {
        super(
            {
                name: { type: String },
                price: { type: Number }
            },
            'product'
        );
    }

    update1(id, data) {
        return new Promise((resolve, reject) => {
            this.collection.updateOne({ _id: id }, data, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        })
    }
}

module.exports = ProductModel;















// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/dbProduct',{ useNewUrlParser: true } );
// const Schema = mongoose.Schema;

// const ProductSchema = new Schema({
//     name: String,
//     price: Number
// });
// const product = mongoose.model('product', ProductSchema);
// class ProductModel{
//     contructor() {

//     }

//     getProduct(id) {
//         return new Promise((resolve, reject) => {
//             product.findById(id, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     addProduct(obj) {
//         return new Promise((resolve, reject) => {
//             product.create(obj, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     updateProduct(id, data) {
//         return new Promise((resolve, reject) => {
//             product.updateOne({_id:id}, data, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     deleteProduct(id) {
//         return new Promise((resolve, reject) => {
//             product.deleteOne({_id: id}, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     getAllProduct() {
//         return new Promise((resolve, reject) => {
//             product.find((err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }
// }
// module.exports = ProductModel;












// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/dbProduct',{ useNewUrlParser: true });
// const { Model, Schema } = mongoose

// const ProductSchema = new Schema({
//   name: String,
//   price: Number
// })

// class ProductModel extends Model {}
// // module.exports = mongoose.model(ProductModel, ProductSchema, 'product');
// module.exports = mongoose.model('product', ProductSchema);
