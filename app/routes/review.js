"use strict";

const express = require("express");
const ReviewController = require("../controllers/review");

const api = express.Router();


api.get("/review/:book_uuid",ReviewController.getAll);
api.get("/review/:book_uuid/:review_uuid",ReviewController.getById);
api.post("/review/:book_uuid",ReviewController.create);
api.put("/review/:book_uuid/:review_uuid",ReviewController.update);
api.delete("/review/:book_uuid/:review_uuid",ReviewController.remove)

module.exports = api;
