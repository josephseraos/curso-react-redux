import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'

// objeto chave/valor em que as chaves são os componentes e valores são funções
const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field valor="Olá" />
    </Provider>,
    document.getElementById('root')
)