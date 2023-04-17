import { resultMovieDay } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movieDay, setMovieDay] = useState([]);

  useEffect(() => {
    async function resultMovie() {
      try {
        const response = await resultMovieDay();
        const arr = response.map(el => ({
          title: el.title,
          id: el.id,
        }));
        if (arr && arr.length > 0) {
          setMovieDay([...arr]);
        }
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
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
