import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './componentes/NavBar/NavBar'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncotrada'
import Conta from './paginas/Conta/Conta'
import Home from './paginas/Home/Home'
import './index.css'


let usuario = JSON.parse(localStorage.getItem('usuario'))
//o parse converte o texto para objeto, retorna e coloca o objeto dentro da var usuario


function logaUsuario(dados){
    const json= JSON.stringify(dados)// recebe o objeto dados e transforma em texto e guarda demtro da variavel
    localStorage.setItem('usuario', json)// adiciona o item e salva. Recebe 02 parametros
    usuario = dados

 
}

function deslogaUsuario(){
    localStorage.removeItem('usuario')// para remover do localStorage
    usuario= null

}


   
//criar função app para retornar o html dele.
function App() {
    return (
        <div className="app">
            <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario}/>

            <Switch>

                <Route path= "/" exact render={() => {
                    return usuario? <Home /> : <Redirect to= "/login"/>

                }}/>
                <Route path="/login" render={(props) =>{
                    return <Login historico={props.history} onEnviar={logaUsuario}/>
                }} />

                <Route path="/conta" component={Conta} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato}/> 
                <Route component= {NaoEncontrada} />
                
                
            </Switch>

        </div>

        
    )       
            
            
}                       
          ReactDOM.render(
            <BrowserRouter><App /></BrowserRouter >,
             document.getElementById('projeto')
          )
                        
      
          




// const props ={
//     historico: {}
//      onEnviar: logaUsuario
 

// props.onEnviar(dados)