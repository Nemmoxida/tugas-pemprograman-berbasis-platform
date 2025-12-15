// dosen.test.js
// Test all repository methods for dosen

const BASE_URL = "http://localhost:3000/dosen";

// Test GET all (with and without pagination)
fetch(`${BASE_URL}`)
  .then((response) => response.json())
  .then((data) => console.log("GET all:", data))
  .catch((err) => console.error(err));

fetch(`${BASE_URL}?page=1`)
  .then((response) => response.json())
  .then((data) => console.log("GET all paginated:", data))
  .catch((err) => console.error(err));

// Test GET by nidn
const testNidn = "2001";
fetch(`${BASE_URL}/${testNidn}`)
  .then((response) => response.json())
  .then((data) => console.log("GET by nidn:", data))
  .catch((err) => console.error(err));

// Test POST (add new dosen)
const newDosen = {
  nidn: "2011",
  name: "yuuna",
  gender: "P",
  prodi: "TI",
  email: "yuuna@proton.com",
};
fetch(`${BASE_URL}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDosen),
})
  .then((response) => response.json())
  .then((data) => console.log("POST dosen:", data))
  .catch((err) => console.error(err));

// Test PUT (update dosen)
const updateDosen = {
  name: "yuuna",
  gender: "P",
  prodi: "TI",
  email: "yuuna@gmail.com",
};
fetch(`${BASE_URL}/${newDosen.nidn}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateDosen),
})
  .then((response) => response.json())
  .then((data) => console.log("PUT dosen:", data))
  .catch((err) => console.error(err));

// Test DELETE
fetch(`${BASE_URL}/${newDosen.nidn}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log("DELETE dosen:", data))
  .catch((err) => console.error(err));
