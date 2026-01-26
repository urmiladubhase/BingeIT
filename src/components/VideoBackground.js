import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movie?.trailerVideo)
   useMovieTrailer();

  return (
    <div>
      { (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
