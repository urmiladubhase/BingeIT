import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
//import nowPlayingMovies fr

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovies);
    if (movie == null) return;   

    const mainMovie = movie[0];
    //console.log(mainMovie);

    const { original_title, overview,id} = mainMovie; //b extracted from the data.json

  return (
  <div>

    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>

  </div>
  )

}

export default MainContainer;

