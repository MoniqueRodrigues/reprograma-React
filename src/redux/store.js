import { createStore, applyMiddleware, compose } from'redux'// função que cria uma história
import thunk from 'redux-thunk' //chama a api antes de disparar a ação
import reducers from './reducers'

const composeEnhancers= 
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
   



export default store