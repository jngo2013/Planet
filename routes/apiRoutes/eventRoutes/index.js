const router = require('express').Router();
// const { signUp, signIn } = require('../../../controllers/authController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');
const { joinEvent, createEvent, getEvent, deleteEvent, specificEvent, updateTitle, updateDescription, updateLocation } = require('../../../controllers/eventController')

// has /api/event prepended to everything


// router.post('/signup', signUp);
// router.post('/signin', requireSignIn, signIn);
router.get('/events', requireAuth, getEvent);

router.post('/join', requireAuth, joinEvent);

router.post('/create', requireAuth, createEvent);
// api/event/events

router.delete('/delete/:eventId', requireAuth, deleteEvent);
router.get('/eventSelected/:eventId', requireAuth, specificEvent)


router.put('/title/:eventId', requireAuth, updateTitle);
router.put('/description/:eventId', requireAuth, updateDescription);
router.put('/location/:eventId', requireAuth, updateLocation);

// router.route('/todos/:todoId')
//   .delete(requireAuth, deleteUserTodoById)
//   .put(requireAuth, updateTodoById);






module.exports = router;