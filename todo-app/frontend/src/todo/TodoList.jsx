import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    function renderRows() {
        const lista = props.list || []
        return (
            lista.map(item => (
                <tr key={item._id}>
                    <td>{ item.description }</td>
                    <td>
                        <IconButton estilo="danger" title="Feito!" icon="trash" onClick={e => props.handleRemove(e, item._id)} />
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
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
