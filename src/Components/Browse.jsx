import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';



const Browse = () => {
  
  useNowPlayingMovies();

  
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