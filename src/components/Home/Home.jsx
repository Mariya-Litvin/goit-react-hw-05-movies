import { resultMovieDay } from 'components/api/Api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movieDay, setMovieDay] = useState([]);

  useEffect(() => {
    async function resultMovie() {
      try {
        const response = await resultMovieDay();
        const arr = response.map(el => ({
          title: el.title,
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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
