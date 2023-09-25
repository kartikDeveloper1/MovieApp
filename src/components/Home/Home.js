import React, { useEffect } from 'react'
import MovieListing from "../../components/MovieListing/MovieListing"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Home() {
  const movieText = "Harry"
  const showsText = "Friends"
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showsText))
    
  },[dispatch])
 
  return (
    <>
    <div className='banner-img'></div>
    <MovieListing/>
    </>
  )
}

export default Home
