import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    /*Where did you get these data?
    Ans :- when we  console.log("1st index trailer", trailer); and see in the item
     key is present. These key is put any video url of the youtube https://www.youtube.com/watch?v="KEY"
     here you can write the key. After the that these video is play there in these you have option to the
     share so click on share you have to find out the emebeded option copy these emebeded code an  past your
     jsx file.  And you can good to go with the you app and see the trailer in your app
     */

    <div className=" w-screen">
      {/* <iframe
        className="w-screen aspect-video" //100%
        // src="https://www.youtube.com/embed/d2OONzqh2jk"     // rough "d2OONzqh2jk"

        src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        // frameborder="0" Always write these in camel case
        frameBorder="0" //like these otherwise it will through an error
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen These is also write in the camel case
        allowFullScreen
        
      ></iframe> */}

      <iframe
      className="w-screen aspect-video"
        // width="560"
        // height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
