import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import client from '../utils/openai'

const GptSearchBar = () => {
const langKey = useSelector((store)=>store.config.lang)
const searchText = useRef(null);
const handleGPTSearchClick = async() =>{
  console.log(searchText.current.value)
  // Make an api call to gpt and get the movie results
  const gptResults  = await client.responses.create({
  model: 'gpt-5.2', 
  instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Are semicolons optional in JavaScript?',
});
console.log(gptResults.output_text);

   
};

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