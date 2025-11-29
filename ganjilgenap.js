import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Cek ganjil genap");

rl.question("Masukan nilai : ", (value) => {
  let hasil = value % 2;

  console.log(hasil == 1 ? "ganjil" : "Genap");
  rl.close();
});
