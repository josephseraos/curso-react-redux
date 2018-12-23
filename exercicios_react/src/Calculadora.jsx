import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { aChanged, bChanged, opChanged, aFocused, bFocused } from './calculadoraActions'

const Calculadora = props => (
    <Fragment>
        <h1>Calculadora</h1>
        <p>Total: <strong>{props.calculadora.total}</strong></p>
        <input type="number" value={props.calculadora.a} onChange={props.aChanged} onFocus={props.aFocused} />
        <select onChange={props.opChanged}>
            <option value={0}>Selecione a operação</option>
            <option value={1}>+</option>
            <option value={2}>-</option>
            <option value={3}>*</option>
            <option value={4}>/</option>
        </select>
        <input type="number" value={props.calculadora.b} onChange={props.bChanged} onFocus={props.bFocused} />
    </Fragment>
)

const mapStateToProps = state => ({ calculadora: state.calculadora })

const mapDispatchToProps = dispatch => bindActionCreators({
    aChanged,
    bChanged,
    opChanged,
    aFocused,
    bFocused
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calculadora)
