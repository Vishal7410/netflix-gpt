import { bgcImage } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
     <div className="absolute -z-10">
        <img
          className="w-screen  sm:bg-local md: h-screen bg-scroll object-cover lg:bg-local xl:bg-fixed"
          src={bgcImage}
          alt="Background Img"/>
        </div>
         <div className="">
     
     <GptSearchBar/>
     <GptMovieSuggestion/>      
     
      </div>
    
    </>
   
  )
}

export default GptSearch