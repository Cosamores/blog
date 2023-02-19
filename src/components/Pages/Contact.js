import React from 'react';
import Navbar from '../UI/Navbar';
import './Contact.css';
import Card from '../UI/Card';

const Contact = () => {
  return (
    <div className='ContactPage'>
      <Navbar/>
      <h1>Contato</h1>
      <form>
        <h2>O formulário ainda não funciona.</h2>
        <input type="text" placeholder="Nome" />
        <input type='email' placeholder='E-mail' />
        <textarea placeholder='Mensagem' />
        <button type='submit'>Enviar</button>
      </form>
      
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
    </div>
  );
};

export default Contact;
