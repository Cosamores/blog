import React from 'react';
import Posts from './Posts';
import Search from '..assets/Search'
import authors from './authors';


const Author = ({ match }) => {
  const author = authors.find(a => a.id === parseInt(match.params.id));
  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <Posts />
      <Search />
    </div>
  );
};

export default Author;
