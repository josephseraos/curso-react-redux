import React, { Component, Fragment } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const baseUrl = 'http://localhost:3003/api/todos'

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
        const description = this.state.description

        axios.post(baseUrl, { description })
            .then(resp => {
                console.log(resp.data)
            })
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
