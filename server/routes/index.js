const express = require("express");

const router = express.Router();

const { landingPage } = require("../handlers/navigate");
const userRoutes = require("./users");

router.get(["/", "/app/*"], landingPage);
router.use("/users", userRoutes);

module.exports = router;
