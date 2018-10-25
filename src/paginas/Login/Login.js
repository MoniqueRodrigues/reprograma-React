import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import './Login.css'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'


function Login() { 
  return (
    <main className="login">
      <h1>Conta</h1>
      <p>Entre com seu email e senha.</p>

      <Legenda HtmlFor='email'>Email:</Legenda>
      <Campo id='email' type= 'email' name ='email' placeholder='E-mail'/>

     <Legenda HtmlFor='senha'>Senha:</Legenda>
     <Campo id='senha' type= 'password' name ='senha' placeholder= 'senha' />
      <Botao>Enviar</Botao>
      <Link url="/conta">Criar uma conta</Link>
    </main>

  )

}
export default Login