import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const apiKey = "132f2a543c82d69a556f0bb280a697a7";

export const fetchRatedData = () => {
  return axios
    .get(`/trending/movie/day?api_key=${apiKey}`).then(({ data }) => data)
}

export const fetchRated = (page) => {
  return axios
    .get(`/trending/movie/day?api_key=${apiKey}&page=${page}`)
    .then(({ data }) => data.results);
};

export const fetchByQuery = (query, page) => {
  if (query) {
    return axios
      .get(`/search/movie?api_key=${apiKey}&query=${query}&${page}`)
      .then(({ data }) => data.results);
  }
};

export const fetchById = (movieId) => {
  return axios
    .get(`/movie/${movieId}?api_key=${apiKey}`)
    .then(({ data }) => data);
};

export const getImgUrl = (url) => {
  return `https://image.tmdb.org/t/p/original${url}`;
};
