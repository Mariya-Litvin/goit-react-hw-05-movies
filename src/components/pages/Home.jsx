import { resultMovieDay } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';

const Home = () => {
  const [movieDay, setMovieDay] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function resultMovie() {
      try {
        const response = await resultMovieDay();
        const arr = response.map(el => ({
          title: el.title,
          id: el.id,
        }));
        setMovieDay(arr);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    resultMovie();
  }, []);

  return (
    <main>
      <h1>The most popular movies at this day</h1>
      <div>
        <ul>
          {movieDay.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
