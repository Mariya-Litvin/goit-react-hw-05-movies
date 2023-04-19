import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ name }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {name &&
          name.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
