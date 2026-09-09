import React from 'react'
import Searchbar from './Searchbar'
import MovieList from './MovieList';
import movies from './movies';
import { useState } from 'react';

function Home() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  
  const onSearch = () => {
    const result =  movies.filter((movie)=> 
      movie.title.toLowerCase().includes(search.toLowerCase().trim())
    )
    setFilteredMovies(result);
  }
  return (
    <main>
      <section className='search-bar'>
        <Searchbar
        search={search} 
        setSearch={setSearch}
        onSearch={onSearch}
        />
      </section>
      <section>
        <div>
          <h2>Results for `{search}`</h2>
          <p>{filteredMovies.length} Results Found</p>
        </div>
        
         <MovieList movies={filteredMovies} search={search} />
      </section>

      
      
    </main>
  )
}

export default Home;