import { Pool } from "pg";

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "sesi9",
  password: "Ilhamkume2006",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  return console.log("connected");
});

export default connection;
