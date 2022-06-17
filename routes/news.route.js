const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();

router.post('/News', newsController.postNews);
router.delete('/News/:id', newsController.deleteNews);
router.patch('/News/:id', newsController.patchNews);
router.get('/News', newsController.getNewsAll);
router.get('/News/:id', newsController.getNewsId);
router.get('/news/:id', newsController.getNewsByCategory);

module.exports = router;
