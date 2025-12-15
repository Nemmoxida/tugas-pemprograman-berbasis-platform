const logging = (req, res, next) => {
  console.log(
    `[LOG] ${new Date().toDateString()}: ${req.headers.host} ${req.method}`
  );
  next();
};

export default logging;
