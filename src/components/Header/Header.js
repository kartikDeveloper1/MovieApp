import React, { useState } from 'react'
import user from '../../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import '../Header/Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Header() {
  const [term,setTerm] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault()
    if(term ==="") return alert('Please enter a search value')
    navigate('/')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }
  return (
    <div className='header'>
      <Link to={'/'}><div className="logo">Movie App</div></Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term}  placeholder='Search Movies or Shows' onChange={(e)=>{ setTerm(e.target.value)}} />
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header
