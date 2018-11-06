import { createStore } from'redux'
import reducers from './reducers'



const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// todas as vezes que acontecer uma ação.





export default store