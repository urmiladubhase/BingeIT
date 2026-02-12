import  { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/openai'
import { API_OPTION } from '../utils/constants'
import { addGptMovieResult } from '../utils/GPTSlice'

const GptSearchBar = () => {
const langKey = useSelector((store)=>store.config.lang)
const searchText = useRef(null);
const dispatch =useDispatch();
const searchMovieTMDB = async (movie) => {
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTION);
    
  const json = await data.json();
  //console.log(json.results);
  return json.results; 

}
const handleGPTSearchClick = async() => {
  //console.log(searchText.current.value);
  const gptQuery = 
    "Act as a movie recommendation system and suggest some movies for the query: " +
    searchText.current.value +
    ". Only give me names of 5 movies, comma separated.";
    let gptMovies = [];
    try{
      const model = genAI.getGenerativeModel(
        { model: "gemini-2.5-flash" },
        { apiVersion: 'v1' }
      );
      
    const result = await model.generateContent(gptQuery);
     
    gptMovies = result.response.text().split(",");
    // console.log("Full Object:", result.response);
    //console.log(gptMovies);
    }
    catch (error) {
      console.error("GPT Error:", error);
    }

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults); 
    dispatch(addGptMovieResult({
    movieNames: gptMovies,
    movieResult: tmdbResults,
    })
   );


  };
  // For each movie we have the TMDB API fetch to search and display


return  (
    <div className='pt-[8%] flex justify-center '>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()  }> 
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].placeholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg ' onClick= {handleGPTSearchClick}> {lang[langKey].Search}</button>
        </form>
    </div>
    
  )
}

export default GptSearchBar