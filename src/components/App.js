import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import image from './assets/1.png'; style={{  
  //backgroundImage: `url(${image}) `}}

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Author from './Pages/Author';



const App = () => {
  return (
    <div className="App">
        <div className='backgound' 
     >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
};

export default App;
