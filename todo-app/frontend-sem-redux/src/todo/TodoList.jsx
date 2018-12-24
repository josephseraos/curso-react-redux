import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    function renderRows() {
        const lista = props.list || []
        return (
            lista.map(item => (
                <tr key={item._id}>
                    <td className={(item.done?' mark-as-done':'')}>{item.description}</td>
                    <td>
                        <IconButton estilo="success" title="Feito" icon="check" onClick={e => props.handleMarkAsDone(e, item)} hide={item.done} />
                        <IconButton estilo="warning" title="Desmarcar" icon="undo" onClick={e => props.handleMarkAsPending(e, item)} hide={!item.done} />
                        <IconButton estilo="danger" title="Excluir" icon="trash" onClick={e => props.handleRemove(e, item)}  hide={!item.done} />
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
