"use strict";

require("dotenv").config();
const http = require("http");

const app = require("./app/index");
const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
}) 
module.exports = app;