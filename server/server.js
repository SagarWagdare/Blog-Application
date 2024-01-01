const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./routes/route");
const cors = require("cors")
dotenv.config();
const userModel = require("./models/userModel")
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT , () => {
      console.log(`server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
 });
 
app.use("/api/user",router)