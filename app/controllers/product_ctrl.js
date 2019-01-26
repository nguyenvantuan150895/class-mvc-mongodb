const ProductModel = require('../models/product_model');

class ProductController {
    constructor() {
        this.productModel = new ProductModel();
    }

    async getProduct(req, res) {
        try {
            let id = req.params.id;
            let product = await this.productModel.get(id);
            res.json(product);
        } catch (e) {
            console.log(e + "--tuan: getProduct in product_ctrl.js");
        }
    }

    async addProduct(req, res) {
        try {
            let objProduct = {name: req.body.name, price: req.body.price};
            let rs = await  this.productModel.add(objProduct);
            res.json({ message: 'create', data: rs });
        } catch (e) {
            console.log(e + "--tuan: addProduct in product_ctrl.js");
        }
    }

    async updateProduct(req, res) {
        try {
            let id = req.params.id;
            let data =  {name: req.body.name, price: req.body.price};
            let rs = await this.productModel.update1(id, data);
            // let rs = await ProductModel.updateOne({_id: id}, data);
            res.json({update: rs});
        } catch (e) {
            console.log(e + "--tuan: updateProduct in product_ctrl.js");
        }
    }

    async deleteProduct(req, res) {
        try {
            let id = req.params.id;
            let rs = await this.productModel.delete(id);
            // let rs = await ProductModel.deleteOne({_id: id});
            res.json({delete: rs});
        } catch (e) {
            console.log(e + "--tuan: deleteProduct in proiduct_ctrl.js");           
        }
    }

    async getAllProduct(req, res) {
        try {
            let arrProduct = await this.productModel.getAll();
            // let arrProduct = await ProductModel.find();
            res.send({data: arrProduct});
        } catch (e) {
            console.log(e + "--tuan: getAllProduct in product_ctrl.js");
        }
    }
}
module.exports = ProductController;






























// const ProductModel = require('../models/product_model');

// class ProductController {
//     constructor() {
//         this.productModel = new ProductModel();
//     }

//     async getProduct(req, res) {
//         try {
//             let id = req.params.id;
//             let product = await this.productModel.getProduct(id);
//             res.json(product);
//         } catch (e) {
//             console.log(e + "--tuan: getProduct in product_ctrl.js");
//         }
//     }

//     async addProduct(req, res) {
//         try {
//             let objProduct = {name: req.body.name, price: req.body.price};
//             let rs = await this.productModel.addProduct(objProduct);
//             res.json({ message: 'success', data: rs });
//         } catch (e) {
//             console.log(e + "--tuan: addProduct in product_ctrl.js");
//         }
//     }

//     async updateProduct(req, res) {
//         try {
//             let id = req.params.id;
//             let data =  {name: req.body.name, price: req.body.price};
//             let rs = await this.productModel.updateProduct(id, data);
//             res.json({update: rs});
//         } catch (e) {
//             console.log(e + "--tuan: updateProduct in product_ctrl.js");
//         }
//     }

//     async deleteProduct(req, res) {
//         try {
//             let id = req.params.id;
//             let rs = await this.productModel.deleteProduct(id);
//             res.json({delete: rs});
//         } catch (e) {
//             console.log(e + "--tuan: deleteProduct in proiduct_ctrl.js");           
//         }
//     }

//     async getAllProduct(req, res) {
//         try {
//             let arrProduct = await this.productModel.getAllProduct();
//             res.send({data: arrProduct});
//         } catch (e) {
//             console.log(e + "--tuan: getAllProduct in product_ctrl.js");
//         }
//     }
// }
// module.exports = ProductController;
