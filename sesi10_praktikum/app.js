import express from "express";
import db from "./db/db.js";
// import dbDosen from "./db/dbDosen.js";
import userRepository from "./userRepository/repository.js";
import dosenRepository from "./userRepository/repositoryDosen.js";
import index from "./route/index.js";

const app = express();
const userRepo = new userRepository(db);
const dosenRepo = new dosenRepository(db);
const port = 3000;

app.use(express.json());

index(app, express, userRepo, dosenRepo);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
