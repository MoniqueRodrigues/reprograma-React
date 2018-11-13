import React from 'react'
import { connect } from 'react-redux'// conectar comp do react ao redux
import { Link, withRouter } from 'react-router-dom'// atualiza o componente sempre que a rota mudar(whithRouter)
import {deslogaUsuario} from '../../redux/action'
import logo from './logo.png'
import Menu from '../Menu/Menu'
import './NavBar.css'




//<Navbar usuario={usuario} deslogaUsuario={deslogaUsuario}/> a var props é um objeto com 1 propriedade
//const props ={usuario:usuario, deslogaUsuario:deslogaUsuario}
function Navbar(props) {

    return (
        <header className='navbar'>
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />

        </header>

    )
}


export default withRouter(
    connect(
      (state) => ({ usuario: state.usuario }),
      { deslogaUsuario }
    )(Navbar)
  )