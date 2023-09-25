import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../../components/MovieCard/MovieCard'
import "../MovieListing/MovieListing.scss"

function MovieListing() {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  console.log(shows)

  let renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>{
        return(
          <>
          {
            !(movie.Poster === 'N/A')  &&
            <MovieCard key={index} data={movie}/>
          }
          </>
          
        )
    })
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>)

  let renderShows = shows.Response ==="True"?(
    shows.Search.map((show,index)=>{
        return(
        <>
          {
            !(show.Poster === 'N/A')  &&
            <MovieCard key={index} data={show} />
          }
        </>
        )
    })
  ):(<div className="shows-error"><h3>{shows.Error}</h3></div>)

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {renderMovies}
          </div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">
            {renderShows}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing
