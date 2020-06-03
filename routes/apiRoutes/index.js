const router = require("express").Router();
const todoRoutes = require("./todoRoutes");
const authRoutes = require("./authRoutes");
const userTodoRoutes = require("./userTodoRoutes");
const eventRoutes = require("./eventRoutes");
const messageRoutes = require("./messageRoutes");
const profile = require("./profile");
const taskRoutes = require("./taskRoutes");

router.use("/profile", profile);
router.use("/todos", todoRoutes);
router.use("/auth", authRoutes);
router.use("/user", userTodoRoutes);
router.use("/event", eventRoutes);
router.use("/dashboard", messageRoutes);
router.use("/taskboard", taskRoutes);

module.exports = router;
