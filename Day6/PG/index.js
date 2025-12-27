// require("../PG/db");

const express = require("express");
const UserRouter = require("./routes/user.route");
const app = express();

app.use(express.json());

app.use("/api", UserRouter);

app.listen(8000, () => {
  console.log("server run on port 8000");
});
