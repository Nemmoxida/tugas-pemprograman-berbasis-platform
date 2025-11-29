import produk from "../useCase/produk.js";

export default function index(app, express, db) {
  app.use("/produk", produk(express, db));
}
