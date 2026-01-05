const validation = (req, res, next) => {
  const q = req.query.payload;

  if (!q) {
    return res
      .status(400)
      .send({ status: 400, message: "No payload detected" });
  }
  if (q.length < 3) {
    return res.status(400).send({
      status: 400,
      message: "Movie name must be more than 3 character",
    });
  }

  next();
};

export default validation;
