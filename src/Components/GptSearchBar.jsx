import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang)
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await 
      // fetch('https://api.themoviedb.org/3/search/movie?query=Andaz%20Apna%20Apna&include_adult=false&language=en-US&page=1', API_OPTION);
     
      // we just need small modifiaction here we data of movies so we just put these movie data here..
      
      fetch("https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1", 
      API_OPTION
      );

      const json = await data.json()

      return json.results
  };

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    // make an API call to GPT API and get Movie Results 



    const gptQuery = 
    "Act as a movie Recommendation System some movie for the query : " +
     searchText.current.value + 
     ".only give me names of movies, comma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi Mil Gaya";
  
   const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}], //content: searchText.current.value
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptResults.choices);// just write in input box and get the result

    // After we put text and the result are showing in log then we need modermize these data here

    // result value is .... these type which i can show here 
    
    // Andaz Apana Apna, Hera Pheri, Chup Chup ke, Jaane Bhi Do Yaaro, Padosan
    
    const gptMovies =  gptResults.choices?.[0]?.message?.content.split(",")
    //see here what does the split? split does in array of string of these result like that 
    // ["Andaz Apana Apna", "Hera Pheri", "Chup Chup ke", "Jaane Bhi Do Yaaro", "Padosan"]
    // for all five movies which i get..  
    //For each movie i will search TMDB API 
    // look at line no 12
    const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));
   // we get the five movie and searchMovieTMDB() function is a async operation all five movies when 
   // we applied the map function each function should be each movies should be return
   // so it need to some time to get first
   // movies resolve or first promise to get the resolve.
   //there are five movie so five promise is made like these

   // [Promise, Promise, Promise, Promise, Promise]
   
   const tmdbResults = await Promise.all(promiseArray);
   // promise.all() takes the array of promises
   // and await use for the all the my promiese get resolve
   console.log(tmdbResults);

   dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));





  };
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}> 
            <input
            ref={searchText}
             type="text"
             className="p-4 m-4 col-span-9"
               placeholder={lang[langkey].gptSearchPlaceholder}
             //'what would you like to watch today?'
             />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}>
              {lang[langkey].search}
              </button>
        </form>
    </div>
  )
}

export default GptSearchBar