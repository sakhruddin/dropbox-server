const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');


const router = Router();

router.post('/drinks', drinksController.createDrinks);
// router.get('/drinks', drinksController.getAllCaffe);
router.get('/drinks/:id', drinksController.getCaffeId);
router.get('/drinks', drinksController.getCaffeInStock);
router.delete('/drinks/:id', drinksController.deleteCaffeId);


router.patch('/drinks/:id', drinksController.updateCaffeId);



module.exports = router;
