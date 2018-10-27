import React from 'react'
import Link from '../../componentes/Link/Link'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Botao from '../../componentes/Botao/Botao'
import './Conta.css'


function Conta() { 
  return (
    <main className="conta">
      <h1>Conta</h1>
      <p>Envie o formulário para criar uma conta.</p>
  
      <Legenda HtmlFor='nome'>Nome</Legenda>
     <Campo id='nome' type= 'text' name ='nome' placeholder= 'Nome' obrigatorio />
     

     
     <Legenda HtmlFor='telefone'>Telefone:</Legenda>
     <Campo id='telefone' type= 'tel' name ='telefone' placeholder= 'Telefone' />

      <Legenda HtmlFor='email'>Email:</Legenda>
      <Campo id='email'
        type= 'email'
        name ='email' 
        placeholder='E-mail'
        required
        pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}

        />
        


     <Legenda HtmlFor='senha'>Senha:</Legenda>
     <Campo id='senha' type= 'password' name ='senha' placeholder= 'Senha' />
     
      <Botao>Enviar</Botao>
      <Link url="/conta">Criar uma conta</Link>
    </main>

  )

}
export default Conta