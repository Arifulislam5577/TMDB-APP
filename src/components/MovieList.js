import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba745ee070efd42b799c0fba20a9ad16"
    );
    const movies = await res.json();
    setMovies(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="w-full mt-20">
      <div className="container my-5">
        <Filter
          movies={movies}
          setFiltered={setFiltered}
          setActive={setActive}
          active={active}
        />
      </div>
      <motion.div
        layout
        className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
      >
        {filtered.map((movie) => (
          <Movie title={movie.title} img={movie.backdrop_path} key={movie.id} />
        ))}
      </motion.div>
    </section>
  );
};

export default MovieList;
