import React from 'react'


function MovieCard({film}) {
  return (
    <div className='movie-card'>
      <img src={film.image} alt={film.title} />
      <div className="movie-info">
        <h3>{film.title}</h3>
        </div>
        <div className='movie-details'>
        <span>⭐{film.rating}</span>
        <span>{film.year}</span>
      </div>
      <button className='movie-inf'>view details</button>
    </div>
  )
}

export default MovieCard;