export default function produk(express, db) {
  const router = express.Router();

  // mengambil semua data
  router.get("/", async (req, res) => {
    const hargaMin = req.query.hargaMin ? req.query.hargaMin : 0;
    const hargaMax = req.query.hargaMax ? req.query.hargaMax : undefined;

    try {
      const getData = await db.getAll(hargaMin, hargaMax);
      if (getData == false) {
        res.send({ message: "data yang akan di ambil tidak ada" });
      }
      res.send(getData);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal mengambil data", error: error.message });
    }
  });

  // mengambil data spesifik berdasarkan ID
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const hargaMin = req.query.hargaMin ? req.query.hargaMin : 0;
    const hargaMax = req.query.hargaMax ? req.query.hargaMax : undefined;
    try {
      const getDataById = await db.getFilter(id, hargaMin, hargaMax);

      if (getDataById == false) {
        res.send({ message: "Id data yang akan di ambil tidak ada" });
      }

      res.send(getDataById);
    } catch (error) {
      res.status(500).send({
        message: "Gagal mengambil data berdasarkan ID",
        error: error.message,
      });
    }
  });

  // upload/menambahkan data
  router.post("/", async (req, res) => {
    const payload = req.body;

    try {
      payload.harga = parseInt(payload.harga, 10);
      if (isNaN(payload.harga)) {
        return res
          .status(400)
          .send({ message: "Harga harus bertipe interger" });
      }
      const postData = await db.postData(payload);
      res.send({ message: "Data berhasil disimpan" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal menyimpan data", error: error.message });
    }
  });

  // menghapus data
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const delData = await db.deleteData(id);
      res.send({ message: `Data dengan ID ${id} telah terhapus` });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal menghapus data", error: error.message });
    }
  });

  // mengupdate data
  router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    try {
      const editData = await db.putData(id, payload);
      if (editData.rowCount == 0) {
        res.send({ message: "Data yang akan di update tidak ada" });
      }

      res.send({ message: "Data telah di update" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal mengupdate data", error: error.message });
    }
  });

  return router;
}
