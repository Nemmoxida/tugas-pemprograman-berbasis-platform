import mahasiswa from "../controller/mahasiswa.js";
import dosen from "../controller/dosen.js";

export default function index(app, express, db, dbDosen) {
  app.use("/mahasiswa", mahasiswa(express, db));
  app.use("/dosen", dosen(express, dbDosen));
}
