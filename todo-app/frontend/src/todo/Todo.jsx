import React, { Component, Fragment } from 'react'
import PageHeader from '../template/PageHeader'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const initialState = {
    description: '',
    list: []
}

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { ...initialState }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(e) {
        console.log('Digitando...')

        this.setState({
            description: e.target.value
        })
    }

    handleAdd(e) {
        console.log('Adicionando nova tarefa')
        console.log(this.state.description)
    }

    handleSearch(e) {
        console.log('Buscando por tarefas')
    }

    render() {
        return (
            <Fragment>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={ this.state.description } handleChange={this.handleChange} handleAdd={this.handleAdd} handleSearch={this.handleSearch} />
                <TodoList />
            </Fragment>
        )
    }
}

export default Todo
