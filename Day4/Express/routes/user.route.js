const express = require("express");
const { getUsers, createUser } = require("../controllers/users.controller");
const dataCheckingMiddleware = require("../middlewares/dataChecking.middleware");

const UserRoute = express.Router();

UserRoute.get("/user", getUsers);
UserRoute.post("/user", dataCheckingMiddleware, createUser);

module.exports = UserRoute;
