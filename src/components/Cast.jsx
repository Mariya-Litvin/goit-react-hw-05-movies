import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resultCast } from './api/Api';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      try {
        const response = await resultCast(movieId);
        setActors(response);
      } catch (error) {
        console.log(error);
      }
    }
    getActors();
  }, [movieId]);

  return (
    <>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://via.placeholder.com/200'
              }
              alt={actor.name}
              width="200"
              loading="lazy"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
