import bcript from "bcrypt";

// const pass = "987";

// const hash = bcript.hashSync(pass, 8);

// console.log(hash);

const user = [
  {
    username: "kermit1",
    password: "$2b$08$gYoQPfSB7u4Zc4Dq0EwgnOtaAD1c85a6rn7MIsiaygHpyk5kvxrT.", //123
  },
  {
    username: "kermit2",
    password: "$2b$08$Sl1JkpNqFwOrF1uBL1RZqessFVIsoEmbQRvXB1.fcjvAjJCBe6Pnu", //987
  },
];

export default user;
// const compare = bcript.compareSync("123", user[0].password);
// console.log(compare);
