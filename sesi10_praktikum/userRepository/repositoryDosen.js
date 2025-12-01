class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const data = await this.db.query("SELECT * FROM dosen");
    return data.rows;
  }

  async getFilter(nidn) {
    const data = await this.db.query("SELECT * FROM dosen WHERE nidn = $1 ", [
      nidn,
    ]);
    return data.rows;
  }

  async postData(payload) {
    const data = await this.db.query(
      "INSERT INTO dosen(nidn, name, gender, prodi, alamat) VALUES($1,$2,$3,$4,$5)",
      [
        payload.nidn,
        payload.name,
        payload.gender,
        payload.prodi,
        payload.alamat,
      ]
    );

    return data;
  }
  async deleteData(nidn) {
    const data = await this.db.query("DELETE FROM dosen WHERE nidn = $1", [
      nidn,
    ]);
    return data;
  }
  async putData(nidn, payload) {
    const data = await this.db.query(
      "UPDATE dosen SET name = $1, gender = $2, prodi = $3, alamat = $4 WHERE nidn = $5",
      [payload.name, payload.gender, payload.prodi, payload.alamat, nidn]
    );

    return data;
  }
}

export default userRepository;
