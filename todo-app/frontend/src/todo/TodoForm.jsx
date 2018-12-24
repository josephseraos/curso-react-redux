import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    descriptionChanged,
    addClicked,
    searchClicked,
    clearClicked
} from './todoActions'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

const TodoForm = props => {

    function handleKey(e) {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                props.handleSearch(e)
            } else {
                props.handleAdd(e)
            }
        } else if (e.key === 'Escape') {
            props.handleClear(e)
        }
    }
    
    return (
        <div className="form-row todo-form">
            <Grid cols={[12, 7, 8, 10]}>
                <input type="text" value={props.todo.description} className="form-control"
                    onChange={props.descriptionChanged} placeholder="Nome" autoFocus
                    onKeyUp={handleKey}
                />
            </Grid>

            <Grid cols={[12, 5, 4, 2]}>
                <IconButton icon='plus' estilo='primary' onClick={props.addClicked} />
                <IconButton icon='search' estilo='info' onClick={props.searchClicked} />
                <IconButton icon='times' estilo='default' onClick={props.clearClicked} />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    todo: state.todo
})

const mapDispatchToProps = dispatch => bindActionCreators({
    descriptionChanged,
    addClicked,
    searchClicked,
    clearClicked
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
