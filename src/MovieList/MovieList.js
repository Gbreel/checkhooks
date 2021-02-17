
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


const MovieList = ( {movies,inputSearch,rating,addMovie} ) => {
    return (
        <div className="MovieList">
            {movies.filter(movie =>
            movie.title.toLowerCase().includes(inputSearch.toLowerCase())
            &&
            movie.rating >= rating
            )
            
            .map(movie => 

            <MovieCard movie={movie} key={movie.id} isMovieCard={true}/>
              
              )}
              <MovieCard isMovieCard={false} addMovie={addMovie}/>
              
        </div>
    )
}

export default MovieList
