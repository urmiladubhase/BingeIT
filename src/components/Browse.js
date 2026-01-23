import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTION } from '../utils/constants';

const Browse = () => { 
  //API call function making using async await

  const getNowPlayingMovies =async()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTION);
    const json =data.json();
    console.log(json);

  };
  //to make an API call we use useEffect as it will call once while rendering the function
  useEffect(()=>{
    getNowPlayingMovies();

  },[]);

  // while using useEffect this [] empty paranthesis is very important if we missed it then we see infinite API calls
  return (
    <div><Header/></div>
  )
}

export default Browse;  