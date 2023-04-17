import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3ad9f44e380b266d75ea33742d9ec7ef';

export const resultMovieDay = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const resultOneMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const resultCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};
