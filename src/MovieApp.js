import React,{useState} from 'react'
import FilterByName from './FilterByName/FilterByName'
import Rating from './Rating/Rating'
import './MovieApp.css'
import { moviesData } from './MoviesData';
import MovieList from './MovieList/MovieList'

const MovieApp = () => {
    const [movies, setMovies] = useState(moviesData)
    const [inputSearch, setinputSearch] = useState("")
    const [rating, setRating] = useState(1)
    const addMovie=(newmovie) =>{

        setMovies([...movies,newmovie])
    }
    return (
        <div className="movieapp">
            <div className="filterPart">
              <FilterByName setinputSearch={setinputSearch}/>
              <Rating filterRating={true} setRating={setRating} Rating={Rating}/>
            </div >
            <div className="List">
            <MovieList movies={movies} inputSearch={inputSearch} rating={rating} addMovie={addMovie}/>
            </div>
           
        </div>
    )
}

export default MovieApp
