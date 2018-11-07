import React from 'react'
import { Redirect } from 'react-router-dom'
import{ connect} from 'react-redux'
import './Home.css'


function Home(props){
    if(!props.usuario){
        return <Redirect to= './login'/>
    }

    return(
        <main className='home'>
        
        
        </main>


    )
}
function passaDadosDoEstadoNoProps(state){
    return{
        usuario:state.usuario
    }
}
 const connectaNaStore = connect(passaDadosDoEstadoNoProps)
 const HomeConnectado= connectaNaStore(Home)


export default Home