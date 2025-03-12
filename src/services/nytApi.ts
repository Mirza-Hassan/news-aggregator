import axios from 'axios';

const API_KEY = 'SI4pA6HGeQILlf91nqhxskLeABueVNLH';
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';

export const fetchNYTArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/us.json`, {
      params: {
        'api-key': API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching NYT articles:', error);
    throw new Error('Failed to fetch articles from The New York Times.');
  }
};