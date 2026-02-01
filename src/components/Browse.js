import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowplayingMovies from '../hooks/useNowplayingMovies';

const Browse = () => { 

  useNowplayingMovies();

  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse;  
 
// Note - in react 18 the code renders two time so 
// it will give every output as 2 times it is due to sticct mode
// toresolve this we have to remove the strict mode from the index .js