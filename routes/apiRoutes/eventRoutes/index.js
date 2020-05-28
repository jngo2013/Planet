const router = require('express').Router();
// const { signUp, signIn } = require('../../../controllers/authController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent, getEvent, deleteEvent, specificEvent } = require('../../../controllers/eventController')

// has /api/event prepended to everything


// router.post('/signup', signUp);
// router.post('/signin', requireSignIn, signIn);
router.get('/events', requireAuth, getEvent);

router.post('/join', requireAuth, joinEvent);

router.post('/create', requireAuth, createEvent);
// api/event/events

router.delete('/delete/:eventId', requireAuth, deleteEvent);
router.get('/eventSelected/:eventId', requireAuth, specificEvent )






module.exports = router;