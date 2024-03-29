import React from 'react';
import ImageCarousel from '../image-carousel/ImageCarousel';
import Navbar from '../UI/Navbar';
import styles from './Home.module.css';
import Violin1 from "../assets/images/cosamores.png"
import Aulas from "../assets/images/aulas.png"
const images = [
  { src: Aulas, alt: "violin" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCQ6jzjU6TTQVwIjfavzQPZP-3W_s4AAy-g&usqp=CAU", alt: "Image 1" },
  //{ src: "https://i1.sndcdn.com/avatars-000186321378-oajnhw-t500x500.jpg", alt: "Image 2" },
  { src: Violin1, alt: "violin" },
  
  //{ src: "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg", alt: "Image 1" },
  //{ src: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", alt: "Image 2" },
  //{ src: "https://img.ibxk.com.br/materias/5866/21577.jpg", alt: "Image 3" },
  //{ src: "../components/assets/1.png", alt: "Winged violin" },
];


const Home = (props) => {

    return (
    <div className={styles.home}>
      <Navbar />
      <ImageCarousel images={images} src={images.src} alt={images.alt}/>
      <footer className='soundclaudio'>        
{/*         <iframe width="100%" height="166" scrolling="no" title="soundcloud" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1281143386&color=%234e3086&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", TextOverflow: "ellipsis", fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/diegocosamores" title="COSAMORES" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none" }}>COSAMORES</a> · <a href="https://soundcloud.com/diegocosamores/cosamores-a-ride-to-the-5th" title="A ride to the 5th dimension" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none" }}>A ride to the 5th dimension</a></div>
 */}        <iframe width="100%" height="450" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1585890937&color=%234e3086&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal",overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/diegocosamores" title="COSAMORES" target="_blank" rel="noreferrer" style={{color:"#cccccc", textDecoration:"none"}}>COSAMORES</a> · <a href="https://soundcloud.com/diegocosamores/sets/diego-cosamores" title="Diego Cosamores" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>Diego Cosamores</a></div>
      </footer>
    </div>

    )

    };

export default Home;
