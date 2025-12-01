import { Pool } from "pg";

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "mahasiswa_sesi10",
  password: "Ilhamkume2006",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("connected to the database");
});

export default connection;
