export default function produk(express, db) {
  const router = express.Router();

  // mengambil semua data
  router.get("/", async (req, res) => {
    try {
      const getData = await db.getAll();
      if (getData == false) {
        return res.send({ message: "data yang akan di ambil tidak ada" });
      }
      res.send(getData);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal mengambil data", error: error.message });
    }
  });

  // mengambil data spesifik berdasarkan ID
  router.get("/:nim", async (req, res) => {
    const nim = req.params.nim;

    try {
      const getDataByNim = await db.getFilter(nim);

      if (getDataByNim == false) {
        return res.send({ message: "Nim data yang akan di ambil tidak ada" });
      }

      res.send(getDataByNim);
    } catch (error) {
      res.status(500).send({
        message: "Gagal mengambil data berdasarkan Nim",
        error: error.message,
      });
    }
  });

  // upload/menambahkan data
  router.post("/", async (req, res) => {
    const payload = req.body;

    try {
      const postData = await db.postData(payload);
      res.send({ message: "Data berhasil disimpan" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal menyimpan data", error: error.message });
    }
  });

  // menghapus data
  router.delete("/:nim", async (req, res) => {
    const nim = req.params.nim;
    try {
      const delData = await db.deleteData(nim);
      res.send({ message: `Data dengan Nim ${nim} telah terhapus` });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal menghapus data", error: error.message });
    }
  });

  // mengupdate data
  router.put("/:nim", async (req, res) => {
    const nim = req.params.nim;
    const payload = req.body;

    try {
      const editData = await db.putData(nim, payload);
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
