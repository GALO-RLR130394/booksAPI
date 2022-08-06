"use strict";

const project = require("../../package.json");

const BookRouter = require("./book");
const ReviewRouter = require("./review");

module.exports = (app) => {
  //Root
  app.get("/", (req, res) => {
    res.json({
      title: `Welcome to ${project.name} API`,
      description: project.description,
      version: project.version,
    });
  });

  //Routers
 app.use("/api/", [
   BookRouter,
   ReviewRouter
 ]);
};
