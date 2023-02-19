import React from 'react';
import Posts from '../Posts/Posts';
import Search from '../assets/Search';
import authors from '../assets/authors';
import Navbar from '../UI/Navbar';

import './Author.css';

console.log('Página de autor');

const Author = ({ props }) => {
  const author = authors.find(a => a.id === parseInt(props.params.id));

  const autor = author.map
  console.log(autor);

  return (
    <div className='Author-container'>
      <Navbar/>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <Posts />
      <Search />
    </div>
  );
};

export default Author;
