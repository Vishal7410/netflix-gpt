import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRated = () => {
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)


    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRated = async ()=> {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
    API_OPTION
    );
    const json = await data.json()
    //  console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(()=> {
    if(!topRatedMovies) getTopRated()
  },[]) 
}
export default useTopRated 