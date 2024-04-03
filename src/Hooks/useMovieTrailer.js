import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

// initially Create

const useMovieTrailer = () => {
  const trailerVideo = useSelector(store => store.movies.trailerVideo)


     // const [trailerId, settrailerId] = useState(null) //OR
  const dispatch = useDispatch()

  // fetch the trailer video && updating the store with trailer video data

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    //  console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData ? filterData[1] : json.results[0];
    console.log("1st index trailer", trailer);

    dispatch(addTrailerVideo(trailer));


   
    // settrailerId(trailer.key)
  };

  useEffect(() => {
    if(!trailerVideo)
    getMovieVideos();
  }, []);

}

export default useMovieTrailer