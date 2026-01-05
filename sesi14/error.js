const errHandling = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: err.message,
  });
};

export default errHandling;
