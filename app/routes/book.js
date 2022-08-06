"use strict";

const express = require("express");
const BookController = require("../controllers/book");

const api = express.Router();

api.post("/book/",BookController.create);
api.get("/book",BookController.getAll);
api.put("/book/:book_uuid",BookController.update);
api.delete("/book/:book_uuid",BookController.remove)
api.get("/book/:book_uuid",BookController.getById);

module.exports = api;
