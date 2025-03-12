import axios from 'axios';

const API_KEY = '3972b290-0458-42f9-b137-8a3a2e6b08af';
const BASE_URL = 'https://content.guardianapis.com/search';

export const fetchGuardianArticles = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        'api-key': API_KEY,
        showFields: 'thumbnail,trailText',
      },
    });

    return response.data.response.results;
  } catch (error) {
    console.error('Error fetching Guardian articles:', error);
    throw new Error('Failed to fetch articles from The Guardian.');
  }
};