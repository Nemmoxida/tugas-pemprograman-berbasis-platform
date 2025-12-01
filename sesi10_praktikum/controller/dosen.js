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
  router.get("/:nidn", async (req, res) => {
    const nidn = req.params.nidn;

    try {
      const getDataBynIdn = await db.getFilter(nidn);

      if (getDataBynIdn == false) {
        return res.send({ message: "nidn data yang akan di ambil tidak ada" });
      }

      res.send(getDataBynIdn);
    } catch (error) {
      res.status(500).send({
        message: "Gagal mengambil data berdasarkan nidn",
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
  router.delete("/:nidn", async (req, res) => {
    const nidn = req.params.nidn;
    try {
      const delData = await db.deleteData(nidn);
      res.send({ message: `Data dengan nidn ${nidn} telah terhapus` });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Gagal menghapus data", error: error.message });
    }
  });

  // mengupdate data
  router.put("/:nidn", async (req, res) => {
    const nidn = req.params.nidn;
    const payload = req.body;

    try {
      const editData = await db.putData(nidn, payload);
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
