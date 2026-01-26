import{ useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = () => {
    const dispatch =useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );

    const json = await data.json();

    const trailers = json.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const trailer = trailers.length ? trailers[0] : null;
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
     getMovieVideos();
  }, []);
  return (
    <div>

    </div>
  )
}

export default useMovieTrailer