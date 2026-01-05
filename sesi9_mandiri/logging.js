const logging = (req, res, next) => {
  console.log(
    `[LOG] ${new Date().toDateString()}: ${req.headers.host} ${req.method}`
  );
  next();
};

export const exeTime = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });
  next();
};

export default logging;
