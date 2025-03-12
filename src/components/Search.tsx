import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string, filters: { date?: string; category?: string; source?: string }) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');

  const handleSearch = () => {
    onSearch(query, { date, category, source });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Filter by date"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
      <select value={source} onChange={(e) => setSource(e.target.value)}>
        <option value="">All Sources</option>
        <option value="NewsAPI">NewsAPI</option>
        <option value="The Guardian">The Guardian</option>
        <option value="New York Times">New York Times</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;