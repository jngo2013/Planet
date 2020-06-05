const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const {
  joinEvent,
  createEvent,
  getEvent,
  deleteEvent,
  specificEvent,
  updateTitle,
  updateDescription,
  updateLocation,
} = require("../../../controllers/eventController");

// has /api/event prepended to everything

router.get("/events", requireAuth, getEvent);

router.post("/join", requireAuth, joinEvent);

router.post("/create", requireAuth, createEvent);
// api/event/events

router.delete("/delete/:eventId", requireAuth, deleteEvent);
router.get("/eventSelected/:eventId", requireAuth, specificEvent);

router.put("/title/:eventId", requireAuth, updateTitle);
router.put("/description/:eventId", requireAuth, updateDescription);
router.put("/location/:eventId", requireAuth, updateLocation);

module.exports = router;
