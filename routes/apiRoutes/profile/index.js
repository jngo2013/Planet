const router = require("express").Router();
const { getUserInfo } = require("../../../controllers/profileController");

const { requireAuth } = require("../../../middlewares/authMiddlewares");

router.get("/profile", requireAuth, getUserInfo);

module.exports = router;
