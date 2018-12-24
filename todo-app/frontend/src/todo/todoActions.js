import axios from 'axios'

const baseUrl = 'http://192.168.0.190:3003/api/todos'

const descriptionChanged = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

// middleware redux-thunk
const addClicked = description => {
    return dispatch => {
        axios.post(baseUrl, { description })
            .then(resp => dispatch(clearClicked()))
            .then(resp => dispatch(searchClicked()))
    }
}

// middleware redux-thunk
const searchClicked = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${baseUrl}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'SEARCH_CLICKED', payload: resp.data }))
    }
}

// middleware redux-multi
const clearClicked = e => ([{
    type: 'CLEAR_CLICKED'
}, searchClicked()])

// middleware redux-thunk
const removeClicked = item => {
    return dispatch => {
        axios.delete(`${baseUrl}/${item._id}`)
            .then(resp => dispatch(searchClicked()))
    }
}

// middleware redux-thunk
const markAsDoneClicked = item => {
    return dispatch => {
        axios.put(`${baseUrl}/${item._id}`, { ...item, done: true })
            .then(resp => dispatch(searchClicked()))
    }
}

// middleware redux-thunk
const markAsPendingClicked = item => {
    return dispatch => {
        axios.put(`${baseUrl}/${item._id}`, { ...item, done: false })
            .then(resp => dispatch(searchClicked()))
    }
}

export {
    descriptionChanged,
    addClicked,
    searchClicked,
    clearClicked,
    removeClicked,
    markAsDoneClicked,
    markAsPendingClicked
}
