const validate = (req, res, next) => {
  const { judul, penulis, tahun } = req.body;
  if (!judul || !penulis || !tahun) {
    return next(Error("Input error"));
  }

  next();
};

export default validate;
