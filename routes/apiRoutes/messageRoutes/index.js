const router = require('express').Router();

const { addMessage, getAllMessages } = require('../../../controllers/messageBController')
const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.post('/', requireAuth, addMessage);

router.get('/', requireAuth, getAllMessages)
module.exports = router