import React from "react";
import MoiveList from "./MoiveList";

const MovieCont = ({ movies }) => {
  return (
    <div className="movie__cont container">
      <ul>
        {movies.map((movie, index) => (
          <MoiveList key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
