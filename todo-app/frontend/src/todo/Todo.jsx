import React, { Component, Fragment } from 'react'
import PageHeader from '../template/PageHeader'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </Fragment>
        )
    }
}

export default Todo
