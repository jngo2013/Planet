const router = require('express').Router();
// const { signUp, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');
const { joinEvent } = require('../../../controllers/eventController')
// has /api/event prepended to everything


// router.post('/signup', signUp);
// router.post('/signin', requireSignIn, signIn);

router.post('/join', joinEvent);

module.exports = router;