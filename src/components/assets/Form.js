import React from "react";
import './Form.css';

const Form = (props) =>{
    return (
        <form>
        <h2>O formulário ainda não funciona.</h2>
        <input type="text" placeholder="Nome" />
        <input type='email' placeholder='E-mail' />
        <textarea placeholder='Mensagem' />
        <button type='submit'>Enviar</button>
      </form>
    )
}

export default Form;