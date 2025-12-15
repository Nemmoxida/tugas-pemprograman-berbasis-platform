class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll(page) {
    if (page !== undefined) {
      const data = await this.db.query(
        "SELECT * FROM dosen ORDER BY nidn LIMIT 5 OFFSET $1",
        [page]
      );
      return data.rows;
    }
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
      "INSERT INTO dosen(nidn, name, gender, prodi, email) VALUES($1,$2,$3,$4,$5)",
      [payload.nidn, payload.name, payload.gender, payload.prodi, payload.email]
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
      "UPDATE dosen SET name = $1, gender = $2, prodi = $3, email = $4 WHERE nidn = $5",
      [payload.name, payload.gender, payload.prodi, payload.email, nidn]
    );

    return data;
  }
}

export default userRepository;
