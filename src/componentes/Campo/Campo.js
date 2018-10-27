import React from 'react'
import './Campo.css'


/*
1) O componente pode mudar de estado? Sim // Classe
2) O que muda? state = { erro: '' } ou {erro: 'Campo obrigatório'}
3) Qual o estado inicial? state = { erro: '' } //constructor
4) O que faz ele mudar?
// function onChange pra verificar se eu devo ou não mostrar uma mensagem de erro
if condicao mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/


//TRANSFORMANDO A FUNÇÃO EM CLASSE
//CRIAR UMA FUNÇÃO CONSTRUTORA E DENTRO CRIAR UM OBEJTO ESTADO INICIAL
//CRIAR UMA FUNÇÃO VALIDA E CHAMAR A FUNÇÃO QUANDO O EVENTO ACONTECER
class Campo extends React.Component{
    constructor(props){
        super(props)
        this.state={erro: ''}
    }    
   
    valida = (evento) => {
        const input = evento.target //document.getElementById('id')
        //console.log('chamou o valida')
        //console.log('alvo do evento', input)
        if (this.props.required && input.value.trim() === '') {// email obrigatorio
            this.setState({ erro: "Campo obrigatório" })
            //console.log('O estado é', this.state)
        } else if (this.props.minLength && input.value.length < this.props.minLength) {
            //pelo menos 10 carateres
            this.setState({ erro: `Digite pelo menos ${this.props.minLength} caracteres` })
        } else if( this.props.pattern && !this.props.pattern.test(input.value)) {
            this.setState ({ erro: "Valor Inválido" })
        }else {
            this.setState({ erro: "" })
        }

        }
            

    
    render(){
        //console.log('Quero ver se o render foi chamado')
        //console.log(`this.props do campo ${this.props.name}`, this.props)
        return (
            <div>
                <input 
                    id={this.props.id}
                    className="campo"
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.valida}
              />
              <p className="grupo_erro">{this.state.erro}</p>
            </div>
          )
    }
}


export default Campo




// class Campo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             erro:""
//         }

//     }
//     valida=(evento) => {
//         const alvo= evento.target
//         if (this.props.obrigatorio && alvo.value.trim() ===""){
//             const state = {
//                 erro:"Campo obrigatorio"
//             }
//             this.setState= (state)
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <input
//                 id={this.props.id}
//                 className="campo"
//                 type={this.props.type}
//                 name={this.props.name}
//                 placeholder={this.props.placeholder}
//                 onChange={this.valida}
//                 />
                
//                 <p className="grupo__erro">
//                     {this.state.erro}
//                 </p>  
//             </div>  
//         )
//     }
// }







// // <Campo id='senha' type ='password' name='senha' placeholder ='...'></Campo>
// // const props ={
// //     id: 'senha'

// // }




