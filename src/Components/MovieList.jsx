/* eslint-disable react/prop-types */
// import React from 'react'
import MovieCards from './MovieCard';

// eslint-disable-next-line react/prop-types
const MovieList = ({title, movies}) => {
    // console.log("Now playing", movies);
  return (
    <div className='px-6  '>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
           {movies?.map((movie)=> (
           <MovieCards key={movie.id} poster={movie.poster_path}/>))} 
        </div>

        </div>
        
    </div>
  )
}

export default MovieList