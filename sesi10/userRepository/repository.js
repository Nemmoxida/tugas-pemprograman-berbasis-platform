class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const data = await this.db.query("SELECT * FROM mahasiswa");
    return data.rows;
  }

  async getFilter(nim) {
    const data = await this.db.query(
      "SELECT * FROM mahasiswa WHERE nim = $1 ",
      [nim]
    );
    return data.rows;
  }

  async postData(payload) {
    const data = await this.db.query(
      "INSERT INTO mahasiswa(nim, name, gender, prodi, alamat) VALUES($1,$2,$3,$4,$5)",
      [payload.nim, payload.name, payload.gender, payload.prodi, payload.alamat]
    );

    return data;
  }
  async deleteData(nim) {
    const data = await this.db.query("DELETE FROM mahasiswa WHERE nim = $1", [
      nim,
    ]);
    return data;
  }
  async putData(nim, payload) {
    const data = await this.db.query(
      "UPDATE mahasiswa SET name = $1, gender = $2, prodi = $3, alamat = $4 WHERE nim = $5",
      [payload.name, payload.gender, payload.prodi, payload.alamat, nim]
    );

    return data;
  }
}

export default userRepository;
