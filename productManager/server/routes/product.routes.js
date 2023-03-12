const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProductById);
    app.post('/api/products', ProductController.createProduct);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct)
}