import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrending from '../Hooks/useTopRated';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';



const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTrending();
  useUpcomingMovies();

  
  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecoundaryContainer/>
     



     {
      /*
      Whole section is devided by two part one is video and other following netflix page

      mainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
         - cards* n
      */
     }
    </div>
    
   

    

   
  )
}

export default Browse