import React from 'react';
//import { Link } from 'react-router-dom';
import ImageCarousel from '../assets/ImageCarousel';
import Navbar from '../UI/Navbar';
//import Card from '../UI/Card';
import styles from './Home.module.css';
//import Search from '../assets/Search';
//import Posts from './Posts';

const images = [
  { src: "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg", alt: "Image 1" },
  { src: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", alt: "Image 2" },
  { src: "https://img.ibxk.com.br/materias/5866/21577.jpg", alt: "Image 3" },
  //{ src: "./src/images/5.jpg", alt: "Image 4" }
];


const Home = (props) => {

    return (
    <div className={styles.home}>
      <Navbar />
      <ImageCarousel images={images} src={images.src} alt={images.alt}/>
      <footer>        
        <iframe width="100%" height="166" scrolling="no" title="soundcloud" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769311256&color=%234e3086&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", TextOverflow: "ellipsis", fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/diegocosamores" title="COSAMORES" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>COSAMORES</a> · <a href="https://soundcloud.com/diegocosamores/possa-ser" title="Possa Ser" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>Possa Ser</a></div>
      </footer>
    </div>

    )

    };

export default Home;
