import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from '@mui/icons-material/Info';

// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 md:px-12 px-3  text-xl font-bold rounded-lg hover:bg-opacity-80 ">
        <PlayCircleOutlineIcon />
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-6 text-xl bg-opacity-50 rounded-lg font-bold">
          <InfoIcon/> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
