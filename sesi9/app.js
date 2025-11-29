import express from "express";
import db from "./db/db.js";
import userRepository from "./userRepository/repository.js";
import index from "./route/index.js";

const app = express();
const userRepo = new userRepository(db);
const port = 3000;

app.use(express.json());

index(app, express, userRepo);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
