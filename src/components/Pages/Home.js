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
          </div>

    )

    };

export default Home;
