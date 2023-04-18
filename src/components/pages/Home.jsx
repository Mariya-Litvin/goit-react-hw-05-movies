import { resultMovieDay } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        setMovieDay([...arr]);
      } catch (error) {
        console.log(error);
      }
    }
    resultMovie();
  }, []);

  return (
    <div>
      <ul>
        {movieDay.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
