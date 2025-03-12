import axios from 'axios';

const API_KEY = '70971cb08afc475594d69d69cec45268';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNewsApiArticles = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: query || 'news',
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};