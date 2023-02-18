import React from 'react';
import Navbar from '../UI/Navbar';
import './Contact.css';

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
      <footer>
      <p>Dados de contato:</p>
      <ul>
        {/* <li>Endereço: Av. Exemplo 123</li>
        <li>Telefone: (11) 12345-6789</li> */}
        <li>E-mail: cosamores@gmail.com</li>
      </ul>
      </footer>
    </div>
  );
};

export default Contact;
