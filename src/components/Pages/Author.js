import React from 'react';
import Posts from './Posts'
import Search from '../assets/Search';
import authors from '../assets/authors';

import './Author.css';


const Author = ({ match }) => {
  const author = authors.find(a => a.id === parseInt(match.params.id));
  return (
    <div className='Author-container'>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <Posts />
      <Search />
    </div>
  );
};

export default Author;
