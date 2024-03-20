import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';



const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();

  
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