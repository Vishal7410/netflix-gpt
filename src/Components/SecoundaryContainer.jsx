import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecoundaryContainer = () => {
  const movies = useSelector(store=> store.movies)

  // console.log("MOives here", movies);

  return movies.nowPlayingMovies && (
    <div className='bg-black'> 
      <div className='mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20'>
        
      <MovieList  title={"Now Playing" } movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movie"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular" } movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies" } movies={movies.upComingMovies}/>
      

      </div>
     
     



      {/**
       * MovieList - popular  ---> 
       * /// Horizontal Movie Cards
       * 
       * 
       * MovieList - Now Playing --> 
       * MovieList - Trending
       * MovieList - Genre
       */}

    </div>
  )
}

export default SecoundaryContainer