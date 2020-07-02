import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a2456e15a53b6b362e8cc9a9e047fa83';

export const findMovieByTitle = async (title) => {
  if (!title) return;
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${title}`;
  const response = await axios({
    method: 'get',
    url
  });
  const {
    results
  } = response.data;
  console.log(results);

  return results;
}

export const findRanking = async () => {
  const url = `${API_URL}/trending/movie/day?api_key=${API_KEY}`;

  const response = await axios({
    method: 'get',
    url
  });
  const {
    results
  } = response.data;
  console.log(results);

  return results;
}
