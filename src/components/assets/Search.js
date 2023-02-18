import React, { useState } from 'react';
import authors from './authors';
import './Search.css';

let author = 0;

  fetch('./authors.json')
  .then((response) => response.json())
  .then((json) => author = json)

  

console.log('Busca de autor ' + author.id)
console.log(author);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(
      authors.filter((author) => author.name.includes(searchTerm))
    );
  };

  return (
    <div className="search-container">
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by author name"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((author) => (
          <div key={author.id}>
            <h3>{author.name}</h3>
            <p>{author.post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
