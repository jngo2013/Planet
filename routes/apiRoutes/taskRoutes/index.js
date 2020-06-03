const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const { addTask, getAllTasks } = require("../../../controllers/taskController");

router.post("/task/:eventId", requireAuth, addTask);

router.get("/get/:eventId", requireAuth, getAllTasks);
module.exports = router;
