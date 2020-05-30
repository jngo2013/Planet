const router = require('express').Router();
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { addTask } = require('../../../controllers')

router.post('/task', requireAuth,  addTask);

module.exports = router;