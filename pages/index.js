//modules
import axios from 'axios'
// Next.js modules
import Head from 'next/head';
import Image from 'next/image';
import link from 'next/link';
// Custom Components
import MovieList from '../components/MovieList';

const MainView = ({ movies }) => {

  return (
    <>
     <MovieList movies={movies} />
    </>
  )
}



export const getStaticProps = async () => {
  const response = await axios.get(`https://moobei.herokuapp.com/movies`);
  const movies = await response.data;
  return {
    props: {
      movies
    }
  }
}

export default MainView;
