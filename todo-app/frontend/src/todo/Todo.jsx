import React, { Component, Fragment } from 'react'
import PageHeader from '../template/PageHeader'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleAdd(e) {
        console.log('Adicionando nova tarefa')
    }

    handleSearch(e) {
        console.log('Buscando por tarefas')
    }

    render() {
        return (
            <Fragment>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} handleSearch={this.handleSearch} />
                <TodoList />
            </Fragment>
        )
    }
}

export default Todo
