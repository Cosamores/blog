import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
//import Author from './components/Pages/Author';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
