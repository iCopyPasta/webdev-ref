import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // with asynchronous structure and await
  const fetchMoviesHandlerAsync = useCallback(async () =>
  {  
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episide_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }});

      setMovies(transformedMovies);
      setIsLoading(false);

    } catch(error) {
      setError(error.message);
    }  
    setIsLoading(false);
    // has no external dependencies
    // fetch is global
  }, []);

  useEffect(() => {
    fetchMoviesHandlerAsync();
  }, [fetchMoviesHandlerAsync]);

  // with "synchronous" Promises
  // const fetchMoviesHandler = () => {
  //     // default is GET
  //     // returns a Promise
  //     fetch("https://swapi.dev/api/films/").then(response =>
  //     {
  //       return response.json();
  //     }).then(data => {
  //       const transformedMovies = data.results.map(movieData => {
  //         return {
  //           id: movieData.episide_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // };

  let content = <p>Found no movies</p>

  if (movies.length > 0){
    content = <MoviesList movies={movies}/>
  }

  if (error){
    content = <p>{error}</p>
  }

  if (isLoading){
    content = <p>Loading Movies...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandlerAsync}>Fetch movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
