import React, { Component } from 'react'
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

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.handleKey = this.handleKey.bind(this)
    }

    UNSAFE_componentWillMount() {
        this.props.searchClicked()
    }

    handleKey(e) {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                this.props.searchClicked()
            } else {
                this.props.addClicked(this.props.description)
            }
        } else if (e.key === 'Escape') {
            this.props.clearClicked(e)
        }
    }

    render() {
        return (
            <div className="form-row todo-form">
                <Grid cols={[12, 7, 8, 10]}>
                    <input type="text" value={this.props.description} className="form-control"
                        onChange={this.props.descriptionChanged} placeholder="Nome" autoFocus
                        onKeyUp={this.handleKey}
                    />
                </Grid>
    
                <Grid cols={[12, 5, 4, 2]}>
                    <IconButton icon='plus' estilo='primary' onClick={() => this.props.addClicked(this.props.description)} />
                    <IconButton icon='search' estilo='info' onClick={() => this.props.searchClicked()} />
                    <IconButton icon='times' estilo='default' onClick={this.props.clearClicked} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    descriptionChanged,
    addClicked,
    searchClicked,
    clearClicked
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
