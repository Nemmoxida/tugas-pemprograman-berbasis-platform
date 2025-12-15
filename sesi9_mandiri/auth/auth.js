const authenticate = (req, res, next) => {
  if (req.headers.authorization !== "token123") {
    return next(Error("Access forbidden"));
  }

  next();
};

export default authenticate;
