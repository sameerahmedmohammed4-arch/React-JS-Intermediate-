import React from "react";
import MovieCard from "../Components/MovieCard";

function MovieList({ movies , search}) {
  if(movies.length === 0){
    return (
      <p className="no-movies">No Movies Found with name '{search}'</p>
    )
  }
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} film={movie} />
      ))}
    </div>
  );
}

export default MovieList;