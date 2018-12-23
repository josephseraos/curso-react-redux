import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

import calculadoraReducer from './calculadoraReducer'
import Calculadora from './Calculadora'

const reducers = combineReducers({
    calculadora: calculadoraReducer
})

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <Calculadora />
    </Provider>,
    document.getElementById('root')
)
