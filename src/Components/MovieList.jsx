import React from 'react'
import MovieCards from './MovieCard';

const MovieList = ({title, movies}) => {
    // console.log("Now playing", movies);
  return (
    <div className='px-6  text-white'>
        <h1 className='text-3xl py-4'>{title}</h1>
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