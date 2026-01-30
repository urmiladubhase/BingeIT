import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import  { useEffect} from 'react'


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
  //API call function making using async await
useEffect(()=>{
  const getNowPlayingMovies = async()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTION);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  };
  //to make an API call we use useEffect as it will call once while rendering the function
  
    getNowPlayingMovies();

  },[dispatch]);

  // while using useEffect this [] empty paranthesis is very important if we missed it then we see infinite API calls
  
}

export default useNowPlayingMovies;