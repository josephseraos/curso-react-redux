import React, { Fragment } from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = props => (
    <Fragment>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </Fragment>
)

export default (Todo)
