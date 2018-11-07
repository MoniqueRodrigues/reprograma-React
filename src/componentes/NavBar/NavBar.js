import React from 'react'
import { connect } from 'react-redux'// conectar comp do react ao redux
import { Link } from 'react-router-dom'
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
function pegaDadosDoUsario(state) {
    return {
        usuario: state.usuario
    }
}



function passaNoPropsDisparadoresDeAcao(dispatch) {
    return {
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)

        }
    }
}
const conectaNaStore = connect(
    pegaDadosDoUsario,
    passaNoPropsDisparadoresDeAcao
)
const NavbarConectado = conectaNaStore(Navbar)



export default NavbarConectado  