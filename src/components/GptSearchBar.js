import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import genAI from '../utils/openai'

const GptSearchBar = () => {
const langKey = useSelector((store)=>store.config.lang)
const searchText = useRef(null);
const handleGPTSearchClick = async() => {
  console.log(searchText.current.value);
  const gptQuery = 
    "Act as a movie recommendation system and suggest some movies for the query: " +
    searchText.current.value +
    ". Only give me names of 5 movies, comma separated.";
    try{
      const model = genAI.getGenerativeModel(
        { model: "gemini-2.5-flash" },
        { apiVersion: 'v1' }
      );
      
    const result = await model.generateContent(gptQuery);
    const response = result.response.text();
    console.log(response);
    }
    catch (error) {
      console.error("GPT Error:", error);
    }
    

  }
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