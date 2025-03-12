import React, { useState } from 'react';
import { fetchAllArticles } from './utils/fetchArticles';
import Search from './components/Search';
import './App.css';

function App() {
  const [articles, setArticles] = useState<any[]>([]);

  const handleSearch = async (query: string, filters: { date?: string; category?: string; source?: string }) => {
    const data = await fetchAllArticles(query);
    let filteredData = data;

    // Apply filters
    if (filters.date) {
      filteredData = filteredData.filter((article) => article?.publishedAt?.includes(filters.date));
    }
    if (filters.category) {
      filteredData = filteredData.filter((article) => article?.category === filters.category);
    }
    if (filters.source) {
      filteredData = filteredData.filter((article) => article?.source?.name === filters.source);
    }

    setArticles(filteredData);
  };

  return (
    <div className="app">
      <div className="search-container">
        <Search onSearch={handleSearch} />
      </div>
      <div className="articles-container">
        {articles.length > 0 ? (
          articles.map((article) => (
            article.title ? (
              <div key={article.url} className="article-card">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>
                  <strong>Source:</strong> {article.source?.name || '-'}
                </p>
                <p>
                  <strong>Published:</strong> {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : '-'}
                </p>
              </div>
            ) : null
          ))
        ) : (
          <p className="no-data">No data</p>
        )}
      </div>
    </div>
  );
}

export default App;