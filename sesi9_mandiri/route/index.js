import buku from "../useCase/buku.js";

export default function index(app, express, db) {
  app.use("/buku", buku(express, db));
}
