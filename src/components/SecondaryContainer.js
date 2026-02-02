import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
const movie = useSelector((store)=> store.movie);
    return (
    <div className="bg-black">
      <div className="-mt-60 relative z-20">
       <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies}/>
       <MovieList title={"Popular"} movie={movie.popularMovies}/>
       <MovieList title={"Most Watched"} movie={movie.nowPlayingMovies}/>
       <MovieList title={"New"} movie={movie.nowPlayingMovies}/>

       </div> 
      </div>
  )
}

export default SecondaryContainer;