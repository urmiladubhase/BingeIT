import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import  { useEffect} from 'react';


const usePopularMovies = () => {

    const dispatch = useDispatch();
  //API call function making using async await
useEffect(()=>{
  const getPopularMovies = async()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTION);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));

  };
  //to make an API call we use useEffect as it will call once while rendering the function
  
    getPopularMovies();

  },[dispatch]);

  // while using useEffect this [] empty paranthesis is very important if we missed it then we see infinite API calls
  
}

export default usePopularMovies;