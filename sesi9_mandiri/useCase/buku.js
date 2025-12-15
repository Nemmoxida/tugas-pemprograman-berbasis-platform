import validate from "./validation.js";
import authenticate from "../auth/auth.js";

export default function produk(express, db) {
  const router = express.Router();

  // mengambil semua data
  router.get("/", async (req, res, next) => {
    try {
      const getData = await db.getAll();
      if (getData == false) {
        return res.send({ message: "data yang akan di ambil tidak ada" });
      }
      res.send(getData);
    } catch (error) {
      next(error);
    }
  });

  // mengambil data spesifik berdasarkan ID
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;

    try {
      const getDataById = await db.getFilter(id);

      if (getDataById == false) {
        return res.send({ message: "Id data yang akan di ambil tidak ada" });
      }

      res.send(getDataById);
    } catch (error) {
      next(error);
    }
  });

  // upload/menambahkan data
  router.post("/", validate, async (req, res, next) => {
    const payload = req.body;

    if (isNaN(new Date(payload.tahun))) {
      return res.status(400).send({ message: "Gagal membaca format tanggal" });
    }

    try {
      const postData = await db.postData(payload);
      res.send({ message: "Data berhasil disimpan" });
    } catch (error) {
      next(error);
    }
  });

  // menghapus data
  router.delete("/:id", authenticate, async (req, res, next) => {
    const id = req.params.id;
    try {
      const delData = await db.deleteData(id);
      res.send({ message: `Data dengan ID ${id} telah terhapus` });
    } catch (error) {
      next(error);
    }
  });

  // mengupdate data
  router.put("/:id", async (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;

    if (isNaN(new Date(payload.tahun))) {
      return res.status(400).send({ message: "Gagal membaca format tanggal" });
    }

    try {
      const editData = await db.putData(id, payload);
      if (editData.rowCount == 0) {
        res.send({ message: "Data yang akan di update tidak ada" });
      }

      res.send({ message: "Data telah di update" });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
