const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/get", (req, res) => {
  res.send("I am data");
});
