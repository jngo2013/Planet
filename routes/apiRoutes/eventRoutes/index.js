const router = require('express').Router();
// const { signUp, signIn } = require('../../../controllers/authController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent } = require('../../../controllers/eventController')

// has /api/event prepended to everything


// router.post('/signup', signUp);
// router.post('/signin', requireSignIn, signIn);

router.post('/join', requireAuth, joinEvent);
router.post('/create', requireAuth, createEvent);




module.exports = router;