import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
//import Author from './Pages/Author';

const App = (props) => {
  return (
      <div className="App">
        <Router>
        <Home/>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
        </Routes>
        </Router>
      </div>
)   
};


export default App;
