import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rootRoutes from "./routes/rootRoutes";
import mongoose from "mongoose";

//import { clientConnect } from "./libs/dbClientConnect.js";
import { connectToDB } from "./libs/dbMongooseConnect.js";
import session from "express-session";

mongoose.promise = global.Promise;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rootRoutes);
app.use(
  session({
    secret: "passport-tutorial",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

//clientConnect();  //database connection
connectToDB(); //mongoose

//Models & routes

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    // webpack flags!
    console.log("> in development");
  }

  console.log(`> listening on port ${port}`);
});
