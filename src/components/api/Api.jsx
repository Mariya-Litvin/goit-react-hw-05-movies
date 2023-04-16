import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3ad9f44e380b266d75ea33742d9ec7ef';

export const resultMovieDay = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );
  return response.data.results;
};
