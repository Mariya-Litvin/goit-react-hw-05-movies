import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3ad9f44e380b266d75ea33742d9ec7ef';

// Список найпопулярніших фільмів на сьогодні для рендеру на головній сторінці

export const resultMovieDay = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

//  Запит повної інформації про фільм для сторінки кінофільму

export const resultOneMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

// Запит інформації про акторський склад для сторінки кінофільму

export const resultCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

// Запит оглядів для сторінки кінофільму

export const resultReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data.results;
};

// Пошук фільму за ключовим словом на сторінці фільмів

export const resultQuery = async filter => {
  const response = await axios.get(
    `/search/movie?query=${filter}&api_key=${KEY}&language=en-US&include_adult=false`
  );
  return response.data.results;
};
