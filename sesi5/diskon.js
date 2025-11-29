import hitungDiskon from "./modules/hitungDiskon.js";
import totalBelanja from "./modules/totalBelanja.js";
import chalk from "chalk";

const harga = 100000;
const totalHarga = totalBelanja(harga, 5);
console.log("Total Harga Belanja : Rp " + totalHarga);

const diskon = hitungDiskon(totalHarga, 10);
console.log(chalk.redBright("Harga Setelah Diskon : Rp " + diskon));
