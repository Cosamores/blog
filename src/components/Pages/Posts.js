import React from 'react';
import authors from '../assets/authors';

let author = 0;

  fetch('./authors.json')
  .then((response) => response.json())
  .then((json) => author = json)

  

console.log('Post de autor ' + author.id)
console.log(author);


console.log('post lido');

const Posts = () => {
  return (
    <div>
      <h2>Posts</h2>
      {authors.map((author) => (
        <div key={author.id}>
          <h3>{author.name}</h3>
          <p>{author.post}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
