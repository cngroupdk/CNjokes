import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/testing";

export const connectToDB = () => {
  mongoose.connect(URL, { useNewUrlParser: true });
  mongoose.set("debug", true);

  require("../models/userScheme");
  require("../config/passport");

  let database = mongoose.connection;

  database.on("error", console.error.bind(console, "connection error"));
  database.once("open", function() {
    console.log("Database succesfuly connected! - mongoose");
  });
};
