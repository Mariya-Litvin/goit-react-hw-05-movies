import { resultQuery } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('query') ?? '';
  // console.log(filter);
  const location = useLocation();

  // Викликається під час відправлення форми

  const onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.movie.value.trim() });
    form.reset();
  };

  useEffect(() => {
    if (filter === '') return;
    async function getSearchResult() {
      try {
        console.log(filter);
        const response = await resultQuery(filter);
        const arr = response.map(el => ({
          title: el.title,
          id: el.id,
        }));
        if (arr && arr.length > 0) {
          setName(arr);
        }
        if (arr.length === 0) {
          return Notiflix.Notify.info(
            'Sorry, the movie you requested was not found. Please try again.'
          );
        }
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getSearchResult();
  }, [filter]);

  return (
    <main>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Search movie" name="movie" />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {name &&
            name.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={location}>
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Movies;
