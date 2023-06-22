import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const genres = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9be29262d25a4b248a7a8c73a358aa0d&with_genres=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9be29262d25a4b248a7a8c73a358aa0d&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9be29262d25a4b248a7a8c73a358aa0d"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle title="Movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag onSearch={genres} />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
