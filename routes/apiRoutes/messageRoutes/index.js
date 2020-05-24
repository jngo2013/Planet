const router = require('express').Router();

const { addMessage } = require('../../../controllers/messageBController')
const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.post('/eventsdashboard', requireAuth, addMessage);

module.exports = router