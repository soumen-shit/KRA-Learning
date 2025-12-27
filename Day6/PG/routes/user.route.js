const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", createUser);
UserRouter.get("/user", getAllUsers);
UserRouter.put("/user/:id", updateUser);
UserRouter.get("/user/:id", getUserById);
UserRouter.delete("/user/:id", deleteUser);

module.exports = UserRouter;
