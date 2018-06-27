console.log('ROUTES FILE')
var path = require("path");
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

module.exports = function (app) {
    // PROCESSING ROUTES
    // app.put('/update/:id', petController.editPet);
    // app.put('/like/:id', petController.likePet);
    // app.get('/get/pets', petController.getPets);
    // app.post('/post/new', petController.addPet);
    // app.get('/get/pet/:id', petController.findPet);
    // app.delete('/delete/:id', petController.delete);

    // WILD CARD
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        }); 

}
