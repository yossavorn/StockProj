import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  const [moviesRender, setMoviesRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const parseData = await fetch("https://stockradars.co/assignment/data.php");
      if (!parseData.ok) {
        throw new Error("Error, Something wrongs!");
      }
      console.log(parseData);
      const data = await parseData.json();
      console.log(data);

      const moviesData = data.map((movie) => {
        return {
          id: movie.N_name,
          title: movie.N_name,
          openingText:  movie.N_COMPANY_E,
          releaseDate: movie.N_BUSINESS_TYPE_T,
        };
      });
      setMoviesRender(moviesData);
    } catch (error) {
      setIsError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Stocks</button>
      </section>
      <section>
        {!isLoading && moviesRender.length > 0 && (
          <MoviesList movies={moviesRender} />
        )}
        {!isLoading && moviesRender.length === 0 && !isError && <p>No Movie</p>}
        {!isLoading && isError && <p>{isError}</p>}
        {isLoading && <p>Now Loading .....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
