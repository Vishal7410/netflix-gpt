import { bgcImage } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={bgcImage}
          alt="Background Img "
        />
      </div>
   <GptSearchBar/>
   <GptMovieSuggestion/>      
    </div>
  )
}

export default GptSearch