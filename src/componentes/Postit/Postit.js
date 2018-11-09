import React,{Component} from  'react'
import {cadastraPostit} from '../../redux/action'
import { connect } from 'react-redux'
import './Postit.css'



class Postit extends Component{
    constructor(props){
        
    super(props)

    }
    
    render(){
        const cadastrando = !this.props.id
        
        return(
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}> 

                <input 
                    className="postit__titulo"
                    type="text"
                    name= "titulo" 
                    placeholder="Titulo"
                    autoComplete= 'off'
                    defaultValue={this.props.titulo}

                    />

                <textarea className="postit__texto" 
                        name="texto" 
                        placeholder="Digite um texto..." 
                        row={5}
                        autoComplete= 'off'
                        defaultValue={this.props.titulo}
                        
                 />

                <button className= "postit__botao-concluir"> Concluido</button>
            </form>
        )

    }
    cadastraOuAlteraPostit = (evento) =>{
        evento.preventDefault()
        const form = evento.target 

        const dados ={
            id: `d4a0dfb0-5f90-46dc-8bb4-bbbfa338cceb${Math.random(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }

        this.props.cadastraPostit(dados) 
        form.reset()
        
        //função para disparar a ação
    }   
   


}

export default connect(
    null,
    {cadastraPostit}
)(Postit)

// connect pega dados do estado e coloca dentro do props
// tem acesso ao dispatch, cria funçao para disparar a ação
//cria o objeto props com as 2 funções e no final passa para a tag(componente criado)
