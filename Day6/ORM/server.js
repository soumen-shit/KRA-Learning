import express from "express";
import UserRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());

const port = 8000;

app.use("/api", UserRoute);

app.listen(port, () => {
  console.log(`Server Run on Port ${port}`);
});
