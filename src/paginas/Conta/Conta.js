import React, {Component} from 'react'
import Link from '../../componentes/Link/Link'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Botao from '../../componentes/Botao/Botao'
import './Conta.css'




//convertendo função em classe:
//criando constructor

class Conta extends Component{
  constructor(props){
    super(props)
    
    this.nomeRef=React.createRef()
    this.telRef=React.createRef()
    this.email=React.createRef()
    this.senha=React.createRef()
    this.state={desabilitado: true}//botão começa desabilitado
  }
  habilitaOuDesabilita= () => {
    const campoNome= this.nomeRef.current
    const campoTelefone=this.telefoneRef.current
    const campoEmail=this.emailRef.current
    const campoSenha=this.senhaRef.current

    if (campoNome.temErro()||campoTelefone.temErro()||campoEmail.temErro()||campoSenha.temErro()){
    this.setState({desabilitado:true})

  }else{
    this.setState({desabiltado: false})
  }
}


render(){
return (
  <main className="conta">
    <h1>Conta</h1>
    <p>Envie o formulário para criar uma conta.</p>

    <Legenda HtmlFor='nome'>Nome</Legenda>
   <Campo
     ref={this.nomeRef}
      id='nome' 
      type= 'text' 
      name ='nome' 
      placeholder= 'Nome' 
      required
      minLength={10}
      onChange={this.habilitaOuDesabilita}
    />
   
   
   <Legenda HtmlFor='telefone'>Telefone:</Legenda>
   <Campo 
  ref={this.telefoneRef}
   id='telefone'     
   type='tel'
   name ='telefone'
   placeholder= 'Telefone'
   required
   onChange={this.habilitaOuDesabilita}
       />

    <Legenda HtmlFor='email'>Email:</Legenda>
    <Campo
    ref={this.emailRef}
     id='email'
      type= 'email'
      name ='email' 
      placeholder='E-mail'
      required
      onChange={this.habilitaOuDesabilita}
      
      />
      

   <Legenda HtmlFor='senha'>Senha:</Legenda>
   <Campo 
    ref={this.senhaRef}
   id='senha'
    type= 'password'
     name ='senha' 
     placeholder= 'Senha'
     required
     minLength={6} 
     onChange={this.habilitaOuDesabilita}     
     />
   
    <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
    <Link url="/login">Fazer Login</Link>
  </main>

)
}
}






 
export default Conta