import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcomingMovies = async ()=> {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
    
    API_OPTION
    );
    const json = await data.json()
     console.log("Upcoming Data", json.results);  
    dispatch(addUpcomingMovies(json.results))
  };

  useEffect(()=> {
    getUpcomingMovies()
  },[])

  
}
export default useUpcomingMovies 