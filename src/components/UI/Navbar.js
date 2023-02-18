import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

console.log('navbar aqui');
const Navbar = () => (
  <nav className="Navbar">
    <h2 className="title">BLOG DO COSAMORES</h2>
    <ul className="Navbar-list">
      <li className="Navbar-item">
        <Link to="/" className="Navbar-link">Home</Link>
      </li>
      {/* <li className="Navbar-item">
        <Link to="/authors" className="Navbar-link">Autores</Link>
      </li> */}
      <li className="Navbar-item">
        <Link to="/about" className="Navbar-link">Sobre</Link>
      </li>
      <li className="Navbar-item">
        <Link to="/contact" className="Navbar-link">Contato</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
