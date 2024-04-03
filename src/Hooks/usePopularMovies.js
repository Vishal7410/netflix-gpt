import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//// initially Create

const usePopularMovies = () => {

  const popularMovies = useSelector(store => store.movies.popularMovies)

    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async ()=> {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
    API_OPTION
    );
    const json = await data.json()
    //  console.log(json.results);
    dispatch(addPopularMovies(json.results))
  };

  useEffect(()=> {
    if(!popularMovies)getPopularMovies()
  },[])
  
}
export default usePopularMovies 