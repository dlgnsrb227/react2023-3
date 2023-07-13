import React from "react";
import MovieList from "./MovieList";

const MovieCont = ({ movies }) => {
  return (
    <div className="movie__cont container">
      <ul>
        {movies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
