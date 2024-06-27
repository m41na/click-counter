const express = require("express");
const timeout = require("connect-timeout");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
require('dotenv').config();

const app = express();

const timeOut = process.env.TIME_OUT || 120000;

// initialize application
app.use(cors());
app.use(logger("dev"));
app.use(morgan("tiny"));
app.use(timeout(timeOut));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../build")));

app.use("/", router);

module.exports = app;
