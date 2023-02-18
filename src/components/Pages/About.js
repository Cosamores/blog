import React from 'react';
import Navbar from '../UI/Navbar';
import './About.css';

const AboutPage = () => {
  return (
    <div className='AboutPage'>
      
      <Navbar/>
      <h1>Sobre</h1>
      <p>Comecei este projeto para publicar algumas coisas que escrevo. O site ainda está em constução, mas já subi aqui para ter uma ideia de como fica na tela. <br/> Este é meu primeiro site e estou com uma ótima expectativa de ver este projeto realmente completo.<br/> Volte em breve!</p>
      <p>Enquanto isto, aproveite para ouvir minhas músicas:<br/><a href="https://soundcloud.com/diegocosamores">SoundCloud</a></p>
      <div className='soundcloud'>   
      <iframe width="100%" height="166" scrolling="no" title="soundcloud" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769311256&color=%234e3086&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", TextOverflow: "ellipsis", fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/diegocosamores" title="COSAMORES" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>COSAMORES</a> · <a href="https://soundcloud.com/diegocosamores/possa-ser" title="Possa Ser" target="_blank" rel="noreferrer" style={{color: "#cccccc", textDecoration: "none"}}>Possa Ser</a></div>            
      </div>
    </div>
  );
};

export default AboutPage;
