import React from 'react';
import Navbar from '../UI/Navbar';
import './Contact.css';
import Card from '../UI/Card';
import Form from '../assets/Form';

const Contact = () => {
  return (
    <div className='ContactPage'>
      <Navbar/>
      <h1>Contato</h1>
      <Card className="footer">
      <ul>
        {/* <li>Endereço: Av. Exemplo 123</li>
        <li>Telefone: (11) 12345-6789</li> */}
        <li> ꧁ <a href="mailto:" className='email'>diegocosamores@gmail.com</a> ꧂ </li>
         ههههه <br/><br/>
        <li> ꧁ <a href="https://linktr.ee/cosamores?utm=blog">Link Tree</a> ꧂</li>  
        ههههه <br/><br/> 
        <li> ꧁<a href="https://github.com/Cosamores"> GitHub</a> ꧂ </li>
        
      </ul>
      </Card>
      <Form/>
    </div>
  );
};

export default Contact;
