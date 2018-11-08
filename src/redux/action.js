


/// função que cria o objeto ação de logar o usuario
export function logaUsuario(dados){
    return {
            type: 'LOGA_USUARIO',
            dados
          }
}
      
    
/// função que cria o objeto ação de deslogar o usuario
export function deslogaUsuario(dispatch) {
  return {
      deslogaUsuario: () => {
          const acao = {
              type: 'DESLOGA_USUARIO'
          }
          dispatch(acao)

      }
  }
}
  