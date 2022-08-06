"use strict";

require('dotenv').config()

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");

const routers = require("./routes");
const errorhandler = require("./middlewares/error");
const app = express();

const port = process.env.PORT || 4000;

// Helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

//CORS
app.use(cors());
//app.disable('etag');

// Get information from html forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log every request to the console
app.use(morgan("dev"));

// Error Handler
app.use(errorhandler);

// Load Routers
routers(app);

module.exports = app;