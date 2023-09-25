import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import {APIKey} from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",async(term)=>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data 
    
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",async(term)=>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data 
    
})

export const fetchAsyncMoviesOrShows = createAsyncThunk("movies/fetchAsyncMoviesOrShows",
    async(id)=>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)
    return response.data 
    
})

const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncMovies.fulfilled,(state,{payload})=>{
            return { ...state, movies: payload }
        })
        builder.addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
            return { ...state, shows: payload }
        })
        builder.addCase(fetchAsyncMoviesOrShows.fulfilled,(state,{payload})=>{
            return { ...state, selectedMovieOrShow: payload }
        })
    }
})


export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow =(state)=> state.movies.selectedMovieOrShow
export default movieSlice.reducer