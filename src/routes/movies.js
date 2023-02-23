const { Router } = require("express");
const router = Router();
// const { forEach } = require("underscore");
// const _ = require("underscore");

const movies = require("../routes/example.json");

// GET
router.get("/", (req, res) => {
  res.json(movies);
});

// POST
router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.status(200).json(movies);
  } else {
    res.status(404).json({ error: "There was an error." });
  }
  res.send("received");
});

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    movies.forEach((movie, i) => {
      if (movie.id == id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.status(200).json(movies);
  } else {
    res.status(404).json({ error: "There was an error" });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  movies.forEach((movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.send(movies);
});
module.exports = router;
