const express = require("express");

const router = express.Router();

const { landingPage } = require("../handlers/navigate");

router.get(["/", "/app/*"], landingPage);

module.exports = router;
