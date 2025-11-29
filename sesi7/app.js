import express from "express";
import data from "./data.json" with {type : "json"};

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Selama data di server " + data.namaKelompok);
});

app.get("/team/:nama", (req, res) => {
  const nama = req.params.nama;
  res.send(`Hai, saya ${nama} dari kelompok ${data.namaKelompok}`);
});

app.get("/info", (req, res) => {
  res.json(data);
});

app.get("/data", (req, res) => {
  res.redirect("/info");
});

app.listen(port, () => {
  console.log(`Server dijalankan di port ${port}`);
});
