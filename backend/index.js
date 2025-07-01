const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// if PORT not found then run the app on 5000.
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected...");
    app.listen(PORT, () => {
        console.log("app is running on:", PORT);
    });

  })
  .catch((err) => {
    console.log("Error to connect with mongoDB: ", err);
  });

