import { fetchNewsApiArticles } from '../services/newsApi';
import { fetchGuardianArticles } from '../services/guardianApi';
import { fetchNYTArticles } from '../services/nytApi';

export const fetchAllArticles = async (query: string) => {
  const [newsApiArticles, guardianArticles, nytArticles] = await Promise.all([
    fetchNewsApiArticles(query),
    fetchGuardianArticles(query),
    fetchNYTArticles(),
  ]);
  return [...newsApiArticles, ...guardianArticles, ...nytArticles];
};