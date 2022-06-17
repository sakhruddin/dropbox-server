const { Router } = require('express');
const { commitsController } = require('../controllers/commits.controller.js');

const router = Router();

router.get('/commits/:id', commitsController.getCommitsAll);
router.post('/commits/:id', commitsController.createCommit);
router.delete('/commits/:id', commitsController.deleteCommits);



module.exports = router;