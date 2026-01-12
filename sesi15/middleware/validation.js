import jwt from "jsonwebtoken";

const validation = (req, res, next) => {
  const q = req.query.payload;
  const token = req.query.authorization;

  if (!token) {
    const err = new Error();
    err.statusCode = 401;
    err.message = "Access denied, no token detected";
    next(err);
  }

  try {
    const tokenValidation = jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    const err = new Error();
    err.statusCode = 403;
    err.message = "Access denied, invalid token";
    next(err);
  }

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
