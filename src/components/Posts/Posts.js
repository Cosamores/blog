import React from 'react';
import authors from '../assets/authors';
import './Posts.css';

console.log('post lido');

const Posts = () => {
  return (
    <div className="post-container">
      <h2>Posts</h2>
       {authors.map((author) => (
        <div className="post" key={author.id}>
          <button>{author.name}</button>
          <p>{author.post}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
