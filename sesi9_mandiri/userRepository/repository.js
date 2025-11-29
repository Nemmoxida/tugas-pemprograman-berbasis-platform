class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const data = await this.db.query("SELECT * FROM buku");
    return data.rows;
  }

  async getFilter(id) {
    const data = await this.db.query("SELECT * FROM buku WHERE id = $1 ", [id]);
    return data.rows;
  }

  async postData(payload) {
    const data = await this.db.query(
      "INSERT INTO buku(judul, penulis, tahun) VALUES($1,$2,$3)",
      [payload.judul, payload.penulis, payload.tahun]
    );

    return data;
  }
  async deleteData(id) {
    const data = await this.db.query("DELETE FROM buku WHERE id = $1", [id]);
    return data;
  }
  async putData(id, payload) {
    const data = await this.db.query(
      "UPDATE buku SET judul = $1, penulis = $2, tahun = $3 WHERE id = $4",
      [payload.judul, payload.penulis, payload.tahun, id]
    );

    return data;
  }
}

export default userRepository;
