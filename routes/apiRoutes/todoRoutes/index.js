const router = require('express').Router();
const { getTodos } = require('../../../controllers/todoController');
// const { requireAuth } = require('../../../middlewares/authMiddlewares');
router.route('/')
  .get(getTodos);

module.exports = router;