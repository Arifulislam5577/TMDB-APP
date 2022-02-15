import React from "react";
import { motion } from "framer-motion";

const Movie = ({ img, title }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h3 className="text-xs  mb-3">{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        alt={title}
        className="rounded-xl shadow"
      />
    </motion.div>
  );
};

export default Movie;
