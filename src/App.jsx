import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList.jsx";
import "./App.css";
import SearchMovie from "./components/SearchMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovieHandler = async (movie) => {
    setIsLoading(true);
    try {
      // const res = await fetch(
      //   `https://imdb-api.com/API/AdvancedSearch/k_102p4na4?title=${movie}`
      // );
      const res = await fetch(
        `https://imdb-api.com/en/API/SearchTitle/k_102p4na4/${movie}`
      );
      const data = await res.json();

      setMovies(data.results);
      console.log(data);
      console.log("Searched for:", movie);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  };

  console.log(movies);
  console.log(movies.length);
  return (
    <>
      <section>
        <SearchMovie movies={movies} onSearchMovie={searchMovieHandler} />

        <div className="resualts__movies">
          {movies.length > 0 ? <h1> Found: {movies.length} movies</h1> : ""}
          {isLoading && <h1>Loading data please wait...</h1>}
        </div>

        {movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    </>
  );
}

export default App;
