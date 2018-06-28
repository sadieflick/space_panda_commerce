console.log('ROUTES FILE')
var path = require("path");
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

module.exports = function (app) {

    // Retrive all products
    app.get('/api/products', productController.getProducts);
    
    // Create Task
    app.post('/api/products', productController.createProduct);
    
    // Delete Task by ID
    app.delete('/api/products/:_id', productController.deleteProductByID);
    
    // Retrieve Task by id
    app.get('/api/products/:_id', productController.getProductByID);
    
    // Update Task by id
    app.patch('/api/products/:_id', productController.editProductByID);

    // WILD CARD
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }); 

}
