import GptSearchBar from './GptSearchBar'
import { BGIMG } from '../utils/constants'
import GpMovieSuggestion from './GpMovieSuggestion'


const GPTSearch = () => {
  return (
    <div>
      <div className=" fixed inset-0 w-full h-screen -z-20"> 
            <img src={BGIMG} alt="BG"  />
          </div>
          <GptSearchBar/>
          <GpMovieSuggestion/>
          </div>

  )
}

export default GPTSearch