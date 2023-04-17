import { resultOneMovie } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [oneMovie, setOneMovie] = useState('');
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    async function getOneMovie() {
      try {
        const response = await resultOneMovie(movieId);

        setOneMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    getOneMovie();
  }, [movieId]);

  const getMovieYear = () => {
    if (oneMovie && oneMovie.release_date) {
      return new Date(oneMovie.release_date).getFullYear();
    }
  };

  const getUserScore = () => {
    return Math.round(oneMovie.vote_average * 10);
  };

  const genresMovie = () => {
    if (oneMovie && oneMovie.genres) {
      const newgenres = oneMovie.genres.map(genre => genre.name);
      return newgenres.join(' ');
    }
  };

  return (
    <>
      <div>
        {oneMovie && (
          <img
            src={`https://image.tmdb.org/t/p/w300${oneMovie.poster_path}`}
            alt={oneMovie.original_title}
            width="300"
            loading="lazy"
          />
        )}
        <h1>
          {oneMovie.original_title} ({getMovieYear()})
        </h1>
        <p>User score: {getUserScore()}%</p>
        <h2>Overview</h2>
        <p>{oneMovie.overview}</p>
        <h3>Genres</h3>
        <p>{genresMovie()}</p>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
