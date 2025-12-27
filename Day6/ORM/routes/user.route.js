import express from "express";
import { createUser } from "../controllers/user.controll.js";

const UserRoute = express.Router();

UserRoute.post("/user", createUser);

export default UserRoute;
