import MovieCard from './MovieCard';

const MovieList = ({title, movie}) => {

    //console.log(movie);
    if (!movie || movie.length === 0) return null; // This line stops the component from rendering until the API data is available.

  return (
    <div className='p-5'>
      <h1 className='font-bold py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            
            
            <div className='flex'>
              {movie.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}</div>
        </div>
    </div>
  )
}

export default MovieList