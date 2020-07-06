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

  return results;
}

export const findMovieById = async (id) => {
  if (!id) return;
  const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
  const response = await axios({
    method: 'get',
    url
  });
  let results = response.data;
  results.poster_path = `https://image.tmdb.org/t/p/w500${results.poster_path}`

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

  results.forEach(x => {
    x.poster_path = `https://image.tmdb.org/t/p/w500${x.poster_path}`
  })

  return results;
}
