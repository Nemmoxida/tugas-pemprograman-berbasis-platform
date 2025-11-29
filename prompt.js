// const prompt = require("prompt-sync")({ sigint: true });
import prompt from "prompt-sync";
prompt({ sigint: true });
// import PromptSync from "prompt-sync" ({sigint: true});

function priceCount(value) {
  if (value > 100000) {
    const discount = value * 0.1;
    const finalPrice = value - discount;
    return finalPrice;
  }

  return value;
}

console.log("Cek harga");
let value = prompt("Masukan Harga : ");

console.log(priceCount(parseInt(value)));
