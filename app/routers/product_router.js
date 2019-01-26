const BaseRouter = require('./base_router');
const ProductController = require('../controllers/product_ctrl');

class ProductRouter extends BaseRouter{
    constructor() {
        super();
    }
    config() {
        const productCtrl = new ProductController();
        this.addRouter('GET', '/product/:id', productCtrl.getProduct.bind(productCtrl));
        this.addRouter('POST', '/product', productCtrl.addProduct.bind(productCtrl));
        this.addRouter('PUT', '/product/:id', productCtrl.updateProduct.bind(productCtrl));
        this.addRouter('DELETE', '/product/:id', productCtrl.deleteProduct.bind(productCtrl));
        this.addRouter('GET', '/getAllProduct', productCtrl.getAllProduct.bind(productCtrl));
    }
}

module.exports = ProductRouter;