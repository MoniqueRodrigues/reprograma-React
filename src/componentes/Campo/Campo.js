import React, { Component } from 'react'
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

class Campo extends Component {
    constructor(props) {
        super(props)
        this.input= { value : ''}
        this.state = {  erro: null }

    }
    getValor() {
        return this.input.value;// o this é uma referência para um objeto

    }//sua função retorna o valor que estava armazenado no this

    temErro = () => {
        if (this.state.erro === null || this.state.erro !== '') {
          return true
        } else {
          return false
        }
      }
    //evento valida quando houver modificação no campo
    valida = (evento) => {
        this.input = evento.target
    
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let mensagem = ''
    
        if (this.props.required && this.input.value.trim() === '') {
          mensagem = 'Campo obrigatório'
        } else if (this.props.minLength && this.input.value.length < this.props.minLength) {
          mensagem = `Digite pelo menos ${this.props.minLength} caracteres`
        } else if (this.props.type === 'email' && !regex.test(this.input.value)) {
          mensagem = 'Valor inválido'
        }
        
        this.setState({ erro: mensagem }, this.props.onChange)
        
        }
    
      render() {
        let classesDoCampo = 'campo'
    
        if (this.props.className) {
          classesDoCampo += ` ${this.props.className}`
        }

        return (
      <div>
        <input 
          id={this.props.id}
          className={classesDoCampo}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoComplete="off"
          onChange={this.valida}
          onBlur={this.valida}
        />

        {this.state.erro && (
            <p className="campo__erro">{this.state.erro}</p>
          )}
          
        </div>
      )
    }
  }
  
  export default Campo
