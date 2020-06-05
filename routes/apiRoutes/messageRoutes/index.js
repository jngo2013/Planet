const router = require("express").Router();

const {
  addMessage,
  getAllMessages,
} = require("../../../controllers/messageBController");
const { requireAuth } = require("../../../middlewares/authMiddlewares");

router.post("/comment/:eventId", requireAuth, addMessage);

router.get("/get/:id", requireAuth, getAllMessages);
module.exports = router;
