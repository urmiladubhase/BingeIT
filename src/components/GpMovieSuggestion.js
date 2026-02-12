import React from 'react'
import { useSelector } from 'react-redux'
import MovieList  from './MovieList'

const GpMovieSuggestion = () => {
    const gpt = useSelector((store)=>store.gpt);
    const {movieResult, movieNames} = gpt; 
    if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black  text-white bg-opacity-70  ' >
       <div>
        {movieNames.map((movieNames,index ) => (
        <MovieList 
        key={movieNames} 
        title={movieNames} 
        movie={movieResult[index]}/>))}
       </div>
    </div>
  )
}

export default GpMovieSuggestion