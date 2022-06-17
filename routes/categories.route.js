const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller.js');
const router = Router();

router.post('/Categories', categoriesController.postCategories)
router.delete('/Categories/:id', categoriesController.deleteCategories)
router.get('/Categories', categoriesController.getCategories)

module.exports = router;