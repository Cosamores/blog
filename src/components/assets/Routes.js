import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Author from './Author';



console.log('alô router');

const Routes = () => (
  
    <Router>
  <Routes>
      <Route exact path="/" component={Home} />
        <Home/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/author" component={Author}  />
      </Routes>
    </Router>
  )
  

export default Routes;
