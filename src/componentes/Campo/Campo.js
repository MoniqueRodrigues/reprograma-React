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
//CRIAR UMA FUNÇÃO CONSTRUTORA E DENTRO CRIAR UM OBJETO ESTADO INICIAL
//CRIAR UMA FUNÇÃO VALIDA E CHAMAR A FUNÇÃO QUANDO O EVENTO ACONTECER

class Campo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modificado:false,erro: '' }
    }
    temErro() {
        if(!this.state.modificado|| this.state.erro){
            return true
        }else{

        }
    }

    valida = (evento) => {
        const input = evento.target
        const { value, type } = input
        const { required, minLength } = this.props
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let mensagem = ''

        if (required && value.trim() === '') {// email obrigatorio
            mensagem = "Campo obrigatório"
        } else if (minLength && value.length < minLength) {
            //pelo menos 10 carateres
            mensagem = `Digite pelo menos ${minLength} caracteres`
        } else if (type === 'email' && !regex.test(value)) {
            mensagem = 'valor inválido'
        }
        this.setState({ erro: mensagem }, this.props.onChange())


    }



    render() {

        return (
            <div>
                <input
                    id={this.props.id}
                    className="campo"
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.valida}
                    onBlur={this.valida}
                />
                <p className="grupo_erro">{this.state.erro}</p>
            </div>
        )
    }
}


export default Campo


