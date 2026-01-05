import express from "express";
import db from "./db/db.js";
import userRepository from "./userRepository/repository.js";
import index from "./route/index.js";
import errHandling from "./errHandling/error.js";
import logging from "./logging.js";
import { exeTime } from "./logging.js";

const app = express();
const userRepo = new userRepository(db);
const port = 3000;

// logging
app.use(logging);
app.use(exeTime);

app.use(express.json());

index(app, express, userRepo);

app.use(errHandling);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
