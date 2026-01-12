import express from "express";
import dotenv from "dotenv";
import errHandling from "./middleware/error.js";
import validation from "./middleware/validation.js";
import signIn from "./middleware/jwt.js";

dotenv.config();

const app = express();

app.use(express.json());
app.post("/account/login", signIn());

app.get("/movie/search", validation, async (req, res, next) => {
  console.log("te");
  const payload = req.query.payload;

  try {
    const respond = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${payload}`
    );

    const data = await respond.json();

    if (!respond.ok) {
      return res.status(500).json({
        statusCode: 500,
        message: "Server error",
      });
    }

    const result = data.results.map((movie) => ({
      title: movie.original_title,
      release_date: movie.release_date,
      rating: movie.vote_average,
    }));

    if (!data.results || data.results.length == 0) {
      return res.status(404).json({
        statusCode: 400,
        message: "Film data not found",
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: "Data successfully retrieved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

app.use(errHandling);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
