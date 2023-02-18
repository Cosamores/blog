import React from 'react';

const Contact = () => {
  return (
    <div className='ContactPage'>
      <h1>Contato</h1>
      <p>Dados de contato:</p>
      <ul>
        <li>Endereço: Av. Exemplo 123</li>
        <li>Telefone: (11) 12345-6789</li>
        <li>E-mail: contato@exemplo.com</li>
      </ul>
      <form>
        <input type='text' placeholder='Nome' />
        <input type='email' placeholder='E-mail' />
        <textarea placeholder='Mensagem' />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
