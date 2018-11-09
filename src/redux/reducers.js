import { combineReducers } from 'redux'//para mais de uma função- combinar

let usuarioInicial = null//estado inicial


const json = localStorage.getItem('usuario')// acessou para pegar o item usuario
if(json){
    usuarioInicial= JSON.parse(json)//coverter o texto em objeto usando o parse
}
//função redutora:
function usuario(state= usuarioInicial, action){
    switch(action.type){
        case 'LOGA_USUARIO':
        const usuarioLogado= action.dados//dados estavam dentro do objeto ação
        const json= JSON.stringify(usuarioLogado)
        localStorage.setItem('usuario', json)
        return usuarioLogado

        case 'DESLOGA_USUARIO'://ação despara o usuario
        localStorage.removeItem('usuario')
        const usuarioDeslogado= null
        return usuarioDeslogado
        default:  //não mexe no estado. retorna a ação inicial
        return state

    }//switch verifica se a acão é igual/ por convenção colocar em letra maiuscula 

}

//função redutora:
function postits(state =[], action){
    switch(action.type){
        case'CADASTRA_POSTIT':
        return state.concat(action.dados)
        default:// retorna estado atual
        return state
    }

}

const reducers = combineReducers({
    usuario: usuario, //propriedade usuario guarda função usuario
    postits: postits //propriedade postits guarda função postits
})


export default reducers




