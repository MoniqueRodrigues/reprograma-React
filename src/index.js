import React from 'react'

import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import{Provider, connect } from 'react-redux'//conecta o component criado do redux com o react 
import store from './redux/store'
import Navbar from './componentes/NavBar/NavBar'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncotrada'
import Conta from './paginas/Conta/Conta'
import Home from './paginas/Home/Home'
import './index.css'

//biblioteca
//componentes
//css



   
//criar função app para retornar o html dele.// recebe o propos com suas 2 funçoes: loga usuario e deslogausuario
function App() {
    return (
        <div className="app">
            <Navbar/>

            <Switch>
                            
                <Route path= "/" exact component= {Home}/>
                <Route path="/login" component ={Login}/>
                <Route path="/conta" component={Conta} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato}/> 
                <Route component= {NaoEncontrada} />
                               
            </Switch>

        </div>
        
    )       
                        
}     







ReactDOM.render(
    <Provider store={store}> 
            <BrowserRouter> 
            <App/>
            </BrowserRouter >
     </Provider>,       
             document.getElementById('projeto')
          )
                        
      
          //o provider permite que todos os componentes se conectem na store.




// const props ={
//     historico: {}
//      onEnviar: logaUsuario
 

// props.onEnviar(dados)