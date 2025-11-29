import os from "os";
import url from "url";

console.log("Nama User : " + os.userInfo().username);
console.log("Platform : " + os.platform());
console.log("Total RAM : " + os.totalmem());

const alamat = "https://www.google.com";
console.log(url.parse(alamat, true));
