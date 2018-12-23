import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

// objeto chave/valor em que as chaves são os componentes e valores são funções
const reducers = combineReducers({
    field: () => ({ value: "Opa" })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field valor="Olá" />
    </Provider>,
    document.getElementById('root')
)