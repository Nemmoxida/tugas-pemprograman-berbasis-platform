class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll(hargaMin, hargaMax) {
    if (hargaMax !== undefined) {
      const data = await this.db.query(
        "SELECT * FROM produk WHERE harga > $1 AND harga < $2",
        [hargaMin, hargaMax]
      );
      return data.rows;
    }

    const data = await this.db.query(
      "SELECT * FROM produk WHERE harga > $1 LIMIT 100",
      [hargaMin]
    );
    return data.rows;
  }

  async getFilter(id, hargaMin, hargaMax) {
    if (hargaMax !== undefined) {
      const data = await this.db.query(
        "SELECT * FROM produk WHERE id_produk = $1 AND harga > $2 AND harga < $3",
        [id, hargaMin, hargaMax]
      );
      return data.rows;
    }

    const data = await this.db.query(
      "SELECT * FROM produk WHERE id_produk = $1 AND harga > $2",
      [id, hargaMin]
    );
    return data.rows;
  }

  async postData(payload) {
    const data = await this.db.query(
      "INSERT INTO produk(name_produk, stock, harga) VALUES($1,$2,$3)",
      [payload.nama_produk, payload.stock, payload.harga]
    );

    return data;
  }
  async deleteData(id) {
    const data = await this.db.query(
      "DELETE FROM produk WHERE id_produk = $1",
      [id]
    );
    return data;
  }
  async putData(id, payload) {
    const data = await this.db.query(
      "UPDATE produk SET name_produk = $1, stock = $2, harga = $3 WHERE id_produk = $4",
      [payload.nama_produk, payload.stock, payload.harga, id]
    );

    return data;
  }
}

export default userRepository;
