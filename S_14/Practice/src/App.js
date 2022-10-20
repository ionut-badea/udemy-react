import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

const URL = "https://swapi.dev/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let content = <p>No movies found</p>;

  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading ...</p>;

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${URL}/films`);
      if (!res.ok) throw new Error("Somehing went wrong!");

      const data = await res.json();
      const movieList = data.results.map(movie => {
        return {
          id: movie.episode_id,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
          title: movie.title,
        };
      });
      setMovies(movieList);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
