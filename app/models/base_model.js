const dbconnect = require('../utils/dbconnect.js');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

class BaseModel {
    constructor(objectSchema, collection) {
        this.CollectionSchema = new Schema(objectSchema);
        this.collection = mongoose.model(collection, this.CollectionSchema);
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.collection.find((err, result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }

    get(id) {
        return new Promise((resolve, reject) => {
            this.collection.findById(id, (err, result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }

    add(obj) {
        return new Promise((resolve, reject) => {
            this.collection.create(obj, (err, result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }

    update(id, data) {
        return new Promise((resolve, reject) => {
            this.collection.updateOne({_id:id}, data, (err, result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.collection.deleteOne({_id: id}, (err, result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }
}
module.exports = BaseModel;
























// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/dbProduct',{ useNewUrlParser: true } );
// const Schema = mongoose.Schema;

// class BaseModel {
//     constructor(collection) {
//         // colection is object model
//         this.collection = collection;
        
//     }
    
//     getAllProduct() {
//         return new Promise((resolve, reject) => {
//             this.collection.find((err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     getProduct(id) {
//         return new Promise((resolve, reject) => {
//             this.collection.findById(id, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     addProduct(obj) {
//         return new Promise((resolve, reject) => {
//             this.collection.create(obj, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     updateProduct(id, data) {
//         return new Promise((resolve, reject) => {
//             this.collection.updateOne({_id:id}, data, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }

//     deleteProduct(id) {
//         return new Promise((resolve, reject) => {
//             this.collection.deleteOne({_id: id}, (err, result) => {
//                 if(err) reject(err);
//                 else resolve(result);
//             })
//         })
//     }
// }
// module.exports = BaseModel;
