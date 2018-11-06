import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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





   
//criar função app para retornar o html dele.
function App(props) {
    const usuario = props.usuario
    const logaUsuario= props.logaUsuario
    const deslogaUsuario = props. deslogaUsuario
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
function passaDadosDoEstadoParaMeuComponente(state){ 
    const props= {
        usuario: state.usuario

    }
    return props

}

function passaFuncoesQueDisparamAcoesViaProps(dispatch){// função que dispara a ação
    const props ={
        logaUsuario:(dados) => {
            const acao = {
                type: 'LOGA_USUARIO',
                dados: dados
            }
            dispatch(acao)
        },
        deslogaUsuario:() =>{
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)
        }
    }
    return props
}


const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente, 
    passaFuncoesQueDisparamAcoesViaProps

)     
// acesso a função estado e dispatch- as 2 retornarão a props que será passada para o app como atributo
const AppConectada= withRouter(conectaNaStore(App))//conecta da store o componente app //             
          





ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter> 
            <AppConectada />
            </BrowserRouter >
     </Provider>,       
             document.getElementById('projeto')
          )
                        
      
          




// const props ={
//     historico: {}
//      onEnviar: logaUsuario
 

// props.onEnviar(dados)