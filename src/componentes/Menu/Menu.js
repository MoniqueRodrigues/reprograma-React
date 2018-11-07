import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'//troca a rota da pagina
import './Menu.css'



//<Menu usuario= {props.usuario}>/
//const props= {usuario:props.usuario}

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { aberto: false }

    }
    abreOuFechaMenu = () => {
        

        if (this.state.aberto) {
            //fechar
            this.setState({ aberto: false })//chama o render alterado
        } else {
            //abrir
            this.setState({ aberto: true })
        }

    }
    sair = () =>{
        this.abreOuFechaMenu()
        this.props.deslogaUsuario()
    }





render(){
    let classesDoBotao= 'navbar-menu__botao'
    let classesDasOpcoes= 'navbar-menu__opcoes'

    if(this.state.aberto){
        //navbar-menu__botao navbar-menu__botao--aberto
        classesDoBotao += ' navbar-menu__botao--aberto '
        classesDasOpcoes += ' navbar-menu__opcoes--aberto'

    }

    return (
        <nav className='navbar-menu'>
            < button className={classesDoBotao} OnClick={this.abreOuFechaMenu}>
                Menu
            </ button>


            <ul className={classesDasOpcoes} >
                <li>
                    <NavLink to="/quem-somos" activeClassName='navbar-menu__opcoes--ativo'>
                        Quem Somos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contato" activeClassName='navbar-menu__opcoes--ativo'>
                        Contato
                    </NavLink>
                </li>
                {this.props.usuario? 
                    (<li>
                        <NavLink to="/login" activeClassName='navbar-menu__opcoes--ativo' onClick={this.sair}>
                            Sair
                        </NavLink>

                    </li>
                    ):(
                        <li>
                            <NavLink to='/login' activeClassName='navbar-menu__opcoes--ativo' >
                            Login
                            </NavLink>
                        </li>
                    )}
                    

            </ul>


        </nav>


    )
}
}


export default Menu