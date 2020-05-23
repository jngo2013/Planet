const router = require('express').Router();
// const { signUp, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent } = require('../../../controllers/eventController')
const { addMessage } = require('../../../controllers/messageBController')
// has /api/event prepended to everything


// router.post('/signup', signUp);
// router.post('/signin', requireSignIn, signIn);

router.post('/join', joinEvent);
router.post('/create', createEvent);


router.post('/', addMessage);

module.exports = router;