import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rootRoutes from "./rootRoutes";

import { clientConnect } from "./libs/dbClientConnect.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rootRoutes);

clientConnect(); //database connection

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
