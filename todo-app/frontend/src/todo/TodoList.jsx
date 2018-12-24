import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    removeClicked,
    markAsDoneClicked,
    markAsPendingClicked
} from './todoActions'

import IconButton from '../template/IconButton'

const TodoList = props => {
    function renderRows() {
        const lista = props.list || []
        return (
            lista.map(item => (
                <tr key={item._id}>
                    <td className={(item.done?' mark-as-done':'')}>{item.description}</td>
                    <td>
                        <IconButton estilo="success" title="Feito" icon="check" onClick={e => props.markAsDoneClicked(item)} hide={item.done} />
                        <IconButton estilo="warning" title="Desmarcar" icon="undo" onClick={e => props.markAsPendingClicked(item)} hide={!item.done} />
                        <IconButton estilo="danger" title="Excluir" icon="trash" onClick={e => props.removeClicked(item)}  hide={!item.done} />
                    </td>
                </tr>
            ))
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='table-action'>Ação</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    removeClicked,
    markAsDoneClicked,
    markAsPendingClicked
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
