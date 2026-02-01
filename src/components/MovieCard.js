import React from 'react';
import { MOVIE_IMG } from '../utils/constants';


const MovieCard = ({posterPath}) => {
      //if (!posterPath) return null;

  return (
    <div className="w-44 pr-3">

        <img alt="MovieImg" src={MOVIE_IMG + posterPath}/>
    
    </div>
  )
}

export default MovieCard