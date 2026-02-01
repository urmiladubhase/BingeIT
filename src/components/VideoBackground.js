import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movie?.trailerVideo)
   useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video">
      
        <iframe className=" w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        
    
    </div>
  );
};

export default VideoBackground;
