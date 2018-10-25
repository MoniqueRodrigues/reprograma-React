import React from 'react'
import './Campo.css'





// <Campo id='senha' type ='password' name='senha' placeholder ='...'></Campo>
// const props ={
//     id: 'senha'

// }
function Campo (props){
    return(
        <input
            id={props.id}
            className='campo'
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
        />
    )
}
export default Campo