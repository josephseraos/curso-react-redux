import React, { Fragment } from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

// class Todo3 extends Component {
//     constructor(props) {
//         super(props)

//         this.refresh()
//     }

    

//     handleSearch(e) {
//         this.refresh(this.state.description)
//     }

//     handleChange(e) {
//         this.setState({
//             description: e.target.value
//         })
//     }

//     handleAdd(e) {
//         const description = this.state.description

//         axios.post(baseUrl, { description })
//             .then(resp => { this.refresh() })

//         document.querySelector('input[type=text]').focus()
//     }

//     handleRemove(e, item) {
//         axios.delete(`${baseUrl}/${item._id}`)
//             .then(resp => this.refresh(this.state.description))
//     }

//     handleMarkAsDone(e, item) {
//         axios.put(`${baseUrl}/${item._id}`, { ...item, done: true })
//             .then(resp => this.refresh(this.state.description))
//     }

//     handleMarkAsPending(e, item) {
//         axios.put(`${baseUrl}/${item._id}`, { ...item, done: false })
//             .then(resp => this.refresh(this.state.description))
//     }

//     handleClear(e, item) {
//         this.refresh()
//     }

//     render() {
//         return (
//             <Fragment>
//                 <PageHeader name='Tarefas' small='Cadastro' />
//                 <TodoForm description={this.state.description}
//                     handleChange={this.handleChange}
//                     handleAdd={this.handleAdd}
//                     handleSearch={this.handleSearch}
//                     handleClear={this.handleClear} />

//                 <TodoList list={this.state.list}
//                     handleMarkAsDone={this.handleMarkAsDone}
//                     handleMarkAsPending={this.handleMarkAsPending}
//                     handleRemove={this.handleRemove} />
//             </Fragment>
//         )
//     }
// }

const Todo = props => (
    <Fragment>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </Fragment>
)

export default (Todo)
