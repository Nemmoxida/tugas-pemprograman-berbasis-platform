const nim = 1011;
const updateData = {
  name: "kermit",
  gender: "L",
  prodi: "TE",
  alamat: "Ampera",
};

fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
