import React from 'react'
import{Link} from 'react-router-dom'
import logo from './logo.png'
import Menu from '../Menu/Menu'
import './NavBar.css'




//<Navbar usuario={usuario} deslogaUsuario={deslogaUsuario}/> a var props é um objeto com 1 propriedade
//const props ={usuario:usuario, deslogaUsuario:deslogaUsuario}
function Navbar(props){

    return(
        <header className= 'navbar'>
            <Link to="/">
            <img className= "navbar__logo" src={logo} alt= "Logo"/>
            </Link>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>

        </header>

    )

}


export default Navbar