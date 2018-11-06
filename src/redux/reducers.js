import { combineReducers } from 'redux'//para mais de uma função- combinar

const usuarioInicial = null//estado inicial

//função redutora:
function usuario(usuarioAtual = usuarioInicial, action){
    switch(action.type){
        case 'LOGA_USUARIO':
        const usuarioLogado= action.dados//dados estavam dentro do objeto ação
        return usuarioLogado//retorna novo estado

        case 'DESLOGA_USUARIO':
        const usuarioDeslogado= null
        return usuarioDeslogado
        default:
        return usuarioAtual

    }//switch verifica se a acão é igual/ por convenção colocar em letra maiuscula 

}

//função redutora:
function postits(postitsAtuais =[], action){
    switch(action.type){
        default:// retorna estado atual
        return postitsAtuais
    }

}

const reducers = combineReducers({
    usuario: usuario, //propriedade usuario guarda função usuario
    postits: postits //propriedade postits guarda função postits
})


export default reducers




