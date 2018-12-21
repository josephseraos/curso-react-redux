import React, { Component, Fragment } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const baseUrl = 'http://192.168.0.190:3003/api/todos'

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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description? `&description__regex=/${description}/` : ''

        axios.get(`${baseUrl}?sort=-createdAt${search}`)
            .then(resp => this.setState({description, list: resp.data}))
    }

    handleSearch(e) {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleAdd(e) {
        const description = this.state.description

        axios.post(baseUrl, { description })
            .then(resp => { this.refresh() })
    }

    handleRemove(e, item) {
        axios.delete(`${baseUrl}/${item._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(e, item) {
        axios.put(`${baseUrl}/${item._id}`, { ...item, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(e, item) {
        axios.put(`${baseUrl}/${item._id}`, { ...item, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(e, item) {
        this.refresh()
    }

    render() {
        return (
            <Fragment>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={ this.state.description }
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />

                <TodoList list={ this.state.list }
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </Fragment>
        )
    }
}

export default Todo
