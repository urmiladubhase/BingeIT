import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BGIMG } from '../utils/constants'


const GPTSearch = () => {
  return (
    <div>
      <div className=" fixed inset-0 w-full h-screen -z-20"> 
            <img src={BGIMG} alt="BG"  />
          </div><GptSearchBar/></div>
  )
}

export default GPTSearch