import buku from "../useCase/buku.js";

function timeValidation(req, res, next) {
  const time = new Date();
  if (time.getHours() >= 8 && time.getHours() <= 18) {
    const err = new Error("Service unavailable");
    err.statusCode = 503;
    return next(err);
  }
  console.log(time.getHours());
  // next();
}

export default function index(app, express, db) {
  app.use("/buku", timeValidation, buku(express, db));
}
