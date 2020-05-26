const router = require('express').Router();
const { getEvents } = require ('../../../controllers/eventController')


router.route('/')
  .get(getEvents)

module.exports = router;